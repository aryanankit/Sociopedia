import { useEffect } from "react";

const DashboardPage = () => {

  useEffect(() => {
    document.title ='Dashboard';
  }, [])

  return (<Box 
    fontSize='32px' 
    fontWeight={'600'} 
    textAlign={'center'}>
     Dashboard 
  </Box>);
}

export default DashboardPage;