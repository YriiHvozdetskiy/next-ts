import axios from "axios";
import {apiRoutes} from "@/api/apiRoutes";


const apiActions = {
   fetchOrders: async (method: string, value = null, id = null) => {
      try {
         return await axios({
            method: method,
            url: apiRoutes.orders(id),
            data: value,
         });
      } catch (error) {
         return error;
      }
   },
   deleteUser: async () => {
      try {
         await axios.delete(apiRoutes.login);

         return true;
      } catch (error) {
         return false;
      }
   }
}

export default apiActions;