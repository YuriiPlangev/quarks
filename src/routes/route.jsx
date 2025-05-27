import { Route, Routes } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import QuestionPage from '../pages/QuestionPage'
import GetResults from '../pages/GetResults'
import TakePlan from '../pages/TakePlan'

const AppRoutes = () => {
  return (
   <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/question/:type" element={<QuestionPage />} />
        <Route path="/results" element={<GetResults />} />
        <Route path="/takeplan" element={<TakePlan />} />
   </Routes>
  )
}

export default AppRoutes