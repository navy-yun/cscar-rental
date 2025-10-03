import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // /admin 경로 체크 (login 제외)
  if (request.nextUrl.pathname.startsWith('/admin') && 
      !request.nextUrl.pathname.startsWith('/admin/login')) {
    
    // 클라이언트 사이드에서는 sessionStorage를 확인할 수 없으므로
    // 쿠키나 다른 방식이 필요하지만, 간단한 구현을 위해
    // 클라이언트 사이드 체크를 admin 페이지에서 수행
    
    // 여기서는 패스하고 페이지에서 체크
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*'
};