import React , { useEffect } from 'react';
import gsap from 'gsap';
import './App.css'; // Make sure to create this file for custom styles// Importing animate.css


function App() {
    useEffect(() => {
        // GSAP animation
        gsap.to("#gsapDiv", { duration: 2, x: 100, opacity: 0.5 });
    }, []);

    return (
        <div>
            <h1 className="animate__animated animate__fadeInDown">自我介紹</h1>

            <p className="animate__animated animate__fadeInUp">資管3C 王國全 411630691</p>
            
            <div className="animate__animated animate__bounce">我的名字叫王國全</div>

            <div id="gsapDiv" className="center">歡迎來到我的網站</div>

            <div className="center">
                <a href="https://github.com/wang1567/113-1-TKU-Web/blob/main/about.html" className="animate__animated animate__pulse animate__infinite">點擊前往我的GITHUB網頁</a>
            </div>

            <div className="center">
                <span>⭥點擊上方及下方連結⭥</span>
            </div>

            <div className="center">
                <a href="https://github.com/wang1567/113-1-TKU-Web/blob/main/about.html" className="animate__animated animate__pulse animate__infinite">點擊前往我的GITHUB網頁</a>
            </div>

            <div className="center">
                <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXMyYjQ1ZTE3dXZsZ25tYnNqdGRwcHd3ZXdhOTIycmd4cGUxcXZ1dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/aQwvKKi4Lv3t63nZl9/giphy.webp" alt="GIF" className="animate__animated animate__zoomIn" />
            </div>
            
            <h2 className="animate__animated animate__fadeInRight">我的個人資訊</h2>

            <ul className="animate__animated animate__fadeInLeft">
                <li>身高170cm</li>
                <li>板橋人</li>
                <li>喜歡 Messi</li>
                <li>喜歡 Curry</li>
            </ul>
            
            <h2 className="animate__animated animate__fadeInRight">我的興趣</h2>
            
            <ol className="animate__animated animate__fadeInRight">
                <li>愛打球</li>
                <li>愛看動漫</li>
                <li>愛打遊戲</li>
                <li>愛看運動比賽</li>
            </ol>

            <h2 className="animate__animated animate__fadeInUp">教育背景</h2>
            <p className="animate__animated animate__fadeInUp">淡江大學 資訊管理學系</p>

            <h2 className="animate__animated animate__fadeInUp">技能</h2>
            <ul className="animate__animated animate__fadeInLeft">
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>Python</li>
                <li>資料庫管理</li>
            </ul>

            <h2 className="animate__animated animate__fadeInUp">專案</h2>
            <ul className="animate__animated animate__fadeInLeft">
                <li>網站開發專案</li>
                <li>資料分析專案</li>
                <li>機器學習專案</li>
            </ul>

            <form action="/submit" method="post" className="animate__animated animate__fadeInUp">
                <label htmlFor="name">姓名:</label>
                <input type="text" id="name" name="name" />
                <input type="submit" value="提交" />
            </form>

            <table className="animate__animated animate__fadeInUp">
                <thead>
                    <tr>
                        <th>名稱</th>
                        <th>年齡</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>王國全</td>
                        <td>20歲</td>
                    </tr>
                </tbody>
            </table>

            <p className="important animate__animated animate__flash">這是我的重要通知，請勿竊取網站資源。</p>
            <p className="italic animate__animated animate__flash">愛打2K的可以找我一起玩喔。</p>
            <div className="animate__animated animate__fadeInUp">
                <p>喜歡玩 MyTeam</p>
                <p>喜歡玩 MyCareer</p>
            </div>
        </div>
    );
}

export default App;
