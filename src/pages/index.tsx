import miragejs from '../services/mirageJs';

import { Header } from '../components/Header'
import { Todolist } from '../components/Todolist'

miragejs;

export default function Home() {
  return (
    <>
      <Header/>
      <Todolist/>
    </>
  )
}
