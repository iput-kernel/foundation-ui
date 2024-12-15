import Link from "next/link";
export default async function VerifyEmail() { 
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold" >アカウント有効化</h1>
        <h2 className="text-xl font-bold" >ユーザーが正常に登録されました。</h2>
        <h2 className="text-2xl" >IPUT-Kernelにようこそ</h2>
        <p className="text-sm"></p>
        <h2>ログインページへ移動</h2>
        <Link href="/login">ログインページへ移動</Link>
      </div>
    </div>
  );
}
