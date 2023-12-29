export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const apiRoutes = {
   login: `${BASE_URL}/auth/login`,
   verify: `${BASE_URL}/auth/verify-email`,
   orders: (id:number) => `${BASE_URL}/account${id ? `/orders/${id}` : '/orders'}`,
}