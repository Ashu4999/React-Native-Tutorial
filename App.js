import Navigator from './routes/lessonStack';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const getFonts = () => {
  return Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  });
};

export default function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  if (isFontLoaded) {
    return (
      <Navigator />
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setIsFontLoaded(true)}
        onError={console.warn}
      />
    );
  }
}
