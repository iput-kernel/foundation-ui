export default async function BadToken() { 
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold" >すでにユーザーが認証済みか、トークンが無効です</h1>
      </div>
    </div>
  );
}
