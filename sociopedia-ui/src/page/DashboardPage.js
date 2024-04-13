import { useEffect } from "react";

const DashboardPage = () => {

  useEffect(() => {
    document.title ='Dashboard';
  }, [])

  return (<div>
    Dashboard Page 
  </div>);
}

export default DashboardPage;