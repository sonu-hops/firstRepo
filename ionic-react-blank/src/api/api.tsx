// import * as axios from 'axios';
import { IonAlert, IonLoading, IonToast } from "@ionic/react";
import React, { createContext, useState } from "react";
import { alertCircleOutline } from "ionicons/icons";
import classes from './api.module.scss'
const axios = require("axios").default;

/**
 * axios instance configuration 
 */
let api = axios.create({
      baseURL: `http://192.168.2.114:8080/api/v1`,
      headers: {
            'Content-Type': 'application/json',
      },
});

/**
 * axios middlewar, passes token in request header on every call
 */
api.interceptors.request.use((config: any) => {
      const token = localStorage.getItem('token');
      config.headers.authorization = token ? `Bearer ${token}` : '';
      return config;
});



export const ApiContext = createContext({});

const ApiProvider: React.FC = (props) => {
      const [isLoading, setIsLoading] = useState(false);
      const [feedBack, setFeedBack] = useState({});
      const [alert, setAlert] = useState({
            message: "",
            isError: false,
            alertTitile: "",
      });

      /**
       * 
       * @param url :url path concating with baseUrl
       * @param method request type (method)
       * @param body request body
       * @returns response data
       */

      const callApi = async (url: string, method: string, body: any) => {
            try {
                  setIsLoading(true);
                  const response = await api({
                        url: url,
                        method: method,
                        data: body
                  })
                  // console.log("response", response);

                  if (response.data.status === 'success') {
                        setIsLoading(false);
                        return response.data
                  } else {
                        setIsLoading(false);
                        // console.log(response.message)
                        setAlert({
                              message: "something went wrong!",
                              isError: true,
                              alertTitile: "alert!",
                        })
                  }
            } catch (error: any) {

                  if (error?.response.status === 401) {
                        setTimeout(() => {
                              setIsLoading(false);
                              setAlert({
                                    message: "Invalid Credential",
                                    isError: true,
                                    alertTitile: "Unauthorized",
                              })
                        }, 1000);
                  } else {
                        setTimeout(() => {
                              setIsLoading(false);
                              setAlert({
                                    message: error.message,
                                    isError: true,
                                    alertTitile: "Error!",
                              })
                        }, 1000);
                  }
                  // console.log(error)
            }

      }

      const value = { isLoading, setIsLoading, feedBack, setFeedBack, callApi };
      return (
            <ApiContext.Provider value={value as any}>
                  <IonLoading
                        cssClass='my-custom-class'
                        isOpen={isLoading}
                        message={'Please wait...'}
                        spinner='lines'
                  />
                  <IonAlert
                        isOpen={alert.isError}
                        header={alert.alertTitile}
                        message={alert.message}
                        buttons={['OK']}
                        backdrop-dismiss
                  />
                  {/* <IonToast
                        cssClass={classes.toast}
                        icon={alertCircleOutline}
                        isOpen={alert.isError}
                        header={alert.alertTitile}
                        message={alert.message}
                        buttons={['OK']}
                        position='bottom'
                        color='danger'
                  /> */}

                  {props.children}
            </ApiContext.Provider>
      );
};

export default ApiProvider;


