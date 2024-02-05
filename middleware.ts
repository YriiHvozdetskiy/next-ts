import {NextRequest, NextResponse} from 'next/server';

export function middleware(req: NextRequest) {
   const token = req.cookies.get('authToken');

   // Перевірка чи запит йде на сторінку, яка потребує авторизації
   const shouldHandleAuth = req.nextUrl.pathname.startsWith('/protected-route');

   // Якщо токен відсутній і користувач намагається отримати доступ до захищеної сторінки
   if (shouldHandleAuth && !token) {
      const url = req.nextUrl.clone();
      url.pathname = '/login'; // Сторінка входу
      return NextResponse.redirect(url);
   }
}

export const config = {
   matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}