import {
  SimpleCase1,
  SimpleCase1Memo,
  SimpleCase2,
  SimpleCase2Memo,
  SimpleCase2WithCompiler,
  SimpleCase3,
  SimpleCase3Memo,
  SimpleCase3WithCompiler,
  SimpleCaseWithCompiler,
} from './components/simple-case';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SimpleCase1 />
      <SimpleCase1Memo />
      <SimpleCaseWithCompiler />
      <SimpleCase2 />
      <SimpleCase2Memo />
      <SimpleCase2WithCompiler />
      <SimpleCase3 />
      <SimpleCase3Memo />
      <SimpleCase3WithCompiler />
    </main>
  );
}
