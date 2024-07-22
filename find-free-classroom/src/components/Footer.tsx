import React from "react";

interface LinkLiProps {
  url: string;
  text: string;
}

const LinkLi: React.FC<LinkLiProps> = ({ url, text }) => (
  <li>
    <a href={url} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  </li>
);

const Footer: React.FC = () => (
  <div id="footer">
    <h1>和大の空き教室検索システム</h1>
    <p>このシステムは、和歌山大学の空き教室を検索するためのものです。</p>

    <h2>免責事項</h2>
    <p>このWebサイトは和歌山大学非公式のものであり、不正確な情報が含まれている可能性があります。また、授業によって使用教室が変わることもあるため、臨機応変な活用をお願いします。</p>

    <h2>サイト管理者</h2>
    <p>このWebサイトは、和歌山大学の学生（ITものづくりプロジェクトAppLii）が管理しています。問い合わせは、下記のリンクからお願いします。</p>

    <h2>関連リンク</h2>
    <ul className="list-disc list-inside">
      <LinkLi text="ITものづくりプロジェクトAppLii" url="https://applii-wu.net/" />
      <LinkLi text="お問い合わせ先" url="https://applii-wu.net/contact" />
      <LinkLi text="GitHub リポジトリ" url="https://github.com/AppLii/find-free-classroom" />
    </ul>
  </div>
);

export default Footer;
