import Form from './main_components/Form';
import ReportTable from './main_components/ReportTable';

function Main({ onSubmit, cookieStands, setCookieStands, hours, stands, deleteStand }) {
  return (
    <main className="flex flex-col items-center justify-center p-4 space-y-8">
      <Form onSubmit={onSubmit} />
      <ReportTable 
        cookieStands={cookieStands} 
        setCookieStands={setCookieStands}
        hours={hours} 
        stands={stands} 
        deleteStand={deleteStand}
      />
    </main>
  );
}

export default Main;