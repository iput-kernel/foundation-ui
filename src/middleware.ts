import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  // /verify-email のサブパスかつさらに深いパスであることを確認
  const isVerifyEmailSubPath = pathname.startsWith("/verify-email")

  if (isVerifyEmailSubPath) {
    const { searchParams } = req.nextUrl;
    const id = searchParams.get("id");
    const secret = searchParams.get("secret");

    const isValid = id === "114514" && secret === "1919810";

    console.log(id, secret, isValid);
    if (isValid) {
      return NextResponse.rewrite(new URL("/verify-email", req.url));
    } else {
      return NextResponse.rewrite(new URL("/verify-email/bad-token", req.url));
    }
  }

  return NextResponse.next();
}