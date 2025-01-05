import React, { createContext, useCallback, useContext, useMemo } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const NotificationContext = createContext({});

const NotificationProvider = ({ children }) => {
  const toastOptions = useMemo(
    () => ({
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    }),
    []
  );

  /**
   * Sends a general notification with the specified message
   * @param {String} message message to display
   */
  const notify = useCallback(
    (message) => {
      toast(message, toastOptions);
    },
    [toastOptions]
  );

  /**
   * Sends an error notification with the specified message
   * @param {String} message message to display
   */
  const error = useCallback(
    (message) => {
      toast.error(message, toastOptions);
    },
    [toastOptions]
  );

  /**
   * Sends a warning notification with the specified message
   * @param {String} message message to display
   */
  const warn = useCallback(
    (message) => {
      toast.warn(message, toastOptions);
    },
    [toastOptions]
  );

  /**
   * Sends a success notification with the specified message
   * @param {String} message message to display
   */
  const success = useCallback(
    (message) => {
      toast.success(message, toastOptions);
    },
    [toastOptions]
  );

  /**
   * Sends an info notification with the specified message
   * @param {String} message message to display
   */
  const info = useCallback(
    (message) => {
      toast.info(message, toastOptions);
    },
    [toastOptions]
  );

  const memoizedValue = useMemo(
    () => ({
      notify,
      error,
      warn,
      success,
      info,
    }),
    [notify, error, warn, success, info]
  );

  return (
    <NotificationContext.Provider value={memoizedValue}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {children}
    </NotificationContext.Provider>
  );
};

const useNotification = () => {
  return useContext(NotificationContext);
};

export { NotificationProvider, useNotification };
