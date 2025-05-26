import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'

import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import PostPage from './pages/PostPage'
import ProfilePage from './pages/ProfilePage'
import SubmitPage from './pages/SubmitPage'
import SubRedditPage from './pages/SubRedditPage'

import './styles/App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='r/:subredditName' element={<SubRedditPage />} />
          <Route path='r/:subredditName/submit' element={<SubmitPage />} />
          <Route path='u/:username' element={<ProfilePage />} />
          <Route path='post/:postId' element={<PostPage />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
