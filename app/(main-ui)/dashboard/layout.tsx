import MyPopUp from './components/MyPopUp';
import { MyNotification } from './components/MyNotification';
import { NavBar } from '@/components/NavBar/NavBar';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

    return (
      <>
        <MyPopUp />
        <MyNotification/>
        <header className="block bg-[#fff] shadow-[0_.3rem_.5rem_0px] shadow-shadow">
           <NavBar/>
        </header>
        <main className="flex-1 overflow-hidden relative z-[9] px-[199px] py-[3rem] block my-container">
          {children}
        </main>
      </>
    );

}
