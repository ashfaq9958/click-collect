import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { clearNotification } from "../../redux/reducers/notification/notificationSlice";

const NotificationHandler = () => {
  const { message, type } = useSelector((state) => state.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    if (message && type) {
      // Show the notification
      switch (type) {
        case "success":
          toast.success(message, { duration: 2000, position: "top-right" });
          break;
        case "error":
          toast.error(message, { duration: 2000, position: "top-right" });
          break;
        case "info":
        default:
          toast(message);
          break;
      }

      // Clear the notification after displaying it
      dispatch(clearNotification());
    }
  }, [message, type, dispatch]);

  return <></>; // Empty component; it just listens for notifications
};

export default NotificationHandler;