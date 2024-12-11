import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";

import Main from "./pages/main/Main";
import Chat from "./pages/chat/Chat";
import ChatList from "./pages/chat/ChatList";
import FollowingList from "./pages/follow/FollowingList";
import FollowerList from "./pages/follow/FollwerList";

import Login from "./pages/login/Login";
import LoginEmail from "./pages/login/LoginEmail";
import SignUpEmail from "./pages/login/SignUpEmail";
import FirstProfileSetting from "./pages/login/FirstProfileSetting";

import Post from "./pages/post/Post";
import PostEdit from "./pages/post/PostEdit";
import PostList from "./pages/post/PostList";
import PostUpLoad from "./pages/post/PostUpload";

import NotFound from "./pages/notfound/NotFound";


function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/home" element={<Main />}/>
      <Route path="/chat/:personId" element={<Chat />}/>
      <Route path="/chatlist" element={<ChatList />}/>
      <Route path="/follower" element={<FollowerList />}/>
      <Route path="/following" element={<FollowingList />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/SignUpEmail" element={<SignUpEmail />}/>
      <Route path="/LoginEmail" element={<LoginEmail />}/>
      <Route path="/FirstProfileSetting" element={<FirstProfileSetting />}/>
      <Route path="/post" element={<Post />}/>
      <Route path="/postedit" element={<PostEdit />}/>
      <Route path="/postlist" element={<PostList />}/>
      <Route path="/postupload" element={<PostUpLoad />}/>
      {/* <Route path="/" element={< />}/>
      <Route path="/" element={< />}/>
      <Route path="/" element={< />}/>
      <Route path="/" element={< />}/>
      <Route path="/" element={< />}/> 
      아마 이런식으로 쭉...
      */}

      <Route path="/*" element={<NotFound />}/>
    </Routes>
  </BrowserRouter>
  )
  
}

export default App;