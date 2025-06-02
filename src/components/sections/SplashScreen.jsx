export default function SplashScreen() {
  return (
    <div className="fixed inset-0 bg-primary flex flex-col items-center justify-center z-50">
      <div className="animate-pulse text-center">
        <h1 className="text-4xl font-script text-white mb-4">The Wedding Of</h1>
        <div className="space-y-2">
          <p className="text-2xl text-white">Aisyah</p>
          <p className="text-xl text-white">&</p>
          <p className="text-2xl text-white">Fahmi</p>
        </div>
      </div>
      <div className="absolute bottom-8">
        <div className="w-8 h-8 border-t-2 border-r-2 border-white animate-spin"></div>
      </div>
    </div>
  );
}
