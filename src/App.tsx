import { Button } from './components';
import { Input } from './components/Input';

function App() {
  return (
    <>
      <h1>Acuarela DS</h1>
      <Button ariaLabel="outlined">Hola</Button>
      <div style={{ display: 'flex' }}>
        <Input label="lala" name="lala" state="error" action={true} size="sm" />
        <Input label="lala" name="lala" state="error" />
        <Input label="lala" name="lala" state="error" size="lg" />
        <Input label="lala" name="lala" state="error" />
        <Input label="lala" name="lala" state="error" resetButton={false} />
        <Input label="lala" name="lala" state="error" />
        <Input label="lala" name="lala" state="error" />
        <Input label="lala" name="lala" state="error" />
        <Input label="lala" name="lala" state="error" />
        <Input label="lala" name="lala" state="error" />
        <Input label="lala" name="lala" state="error" />
        <Input label="lala" name="lala" state="error" />
        <Input label="lala" name="lala" state="error" />
        <Input label="lala" name="lala" state="error" />
      </div>
    </>
  );
}

export default App;
