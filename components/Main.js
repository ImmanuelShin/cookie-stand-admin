import Form from './main_components/Form';
import Placeholder from './main_components/Placeholder';

function Main({ onSubmit, cookieStand }) {
  return (
    <main className="flex flex-col items-center justify-center p-4 space-y-8">
      <Form onSubmit={onSubmit} />
      {cookieStand && <Placeholder cookieStand={cookieStand} />}
    </main>
  );
}

export default Main;