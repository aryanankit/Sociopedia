import { useEffect } from "react";

const MessengerPage = () => {

  useEffect(() => {
    document.title = 'Messenger';
  }, []);

  return (<div>
    Messenger Page
  </div>)
}

export default MessengerPage;