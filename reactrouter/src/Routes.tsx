import {Route, Routes} from 'react-router-dom'
import Invoices from './components/Invoices'

export enum Paths{
  INVOICES='/invoices',
  EXPENSES='/expenses'
}

export const Websites = () => {
    return (
        <Routes>
            <Route path={Paths.INVOICES} element={<Invoices/>}/>
        </Routes>
    )
}
