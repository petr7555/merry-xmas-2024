import { useEffect, useState } from 'react';
import { DotLottieReact, DotLottie } from '@lottiefiles/dotlottie-react';
import NavigationButton from './components/NavigationButton';
import Background from './components/Background';
import VoucherContent from './components/VoucherContent';

const App = () => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [dotLottie, setDotLottie] = useState<DotLottie | null>(null);

  function play() {
    if (dotLottie) {
      dotLottie.play();
    }
  }

  useEffect(() => {
    function onComplete() {
      setIsAnimationComplete(true);
      setTimeout(() => setShowButton(true), 2000);
    }

    if (dotLottie) {
      dotLottie.addEventListener('complete', onComplete);
    }

    return () => {
      if (dotLottie) {
        dotLottie.removeEventListener('complete', onComplete);
      }
    };
  }, [dotLottie]);

  const dotLottieRefCallback = (dotLottie: DotLottie) => {
    setDotLottie(dotLottie);
  };

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Background show={!isAnimationComplete} type="initial" />
      <Background show={isAnimationComplete} type="final" />
      {!isAnimationComplete && (
        <DotLottieReact
          src="https://lottie.host/fc4ae7af-3ab8-4fea-a9f0-1069ec88e403/mzVYudx1Nc.lottie"
          dotLottieRefCallback={dotLottieRefCallback}
          className="w-96 h-96 cursor-pointer"
          onClick={play}
        />
      )}
      {isAnimationComplete && (
        <div className="flex flex-col items-center gap-12 px-4">
          <VoucherContent />
          <div className="h-[68px] flex items-center">
            {showButton && <NavigationButton />}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;