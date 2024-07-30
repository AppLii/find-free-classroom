import React, { useState, useEffect } from "react";
import scheduleData from "./ScheduleData";

const classRoomFreeFrag = "空き";
const classRoomOccupiedFrag = "使用中";

interface ClassRoomStatusDisplayProps {
  roomName: string;
  status: string;
  showOnEnabled: boolean;
}

const ClassRoomStatusDisplay: React.FC<ClassRoomStatusDisplayProps> = ({ roomName, status, showOnEnabled }) => {
  const isAvailable = status === classRoomFreeFrag;
  if (isAvailable === showOnEnabled) {
    return (
      <tr className="">
        <td className="text-center">
          <span className={`room-status ${isAvailable ? "room-free" : "room-occupied"}`}>{isAvailable ? "空き教室" : "使用中"}</span>
        </td>
        <td className="room-name">{roomName}</td>
      </tr>
    );
  } else {
    return <tr></tr>;
  }
};

function getNowDayAndTime(): [string, string] {
  const now = new Date();
  const daysOfWeek = ["日", "月", "火", "水", "木", "金", "土"];
  const day = daysOfWeek[now.getDay()];
  // TODO: 現在時刻に対応する時間帯を取得する
  const time = "";
  return [day, time];
}

const MainComponent: React.FC = () => {
  const [nowDay, nowTime] = getNowDayAndTime();
  const [day, setDay] = useState(nowDay);
  const [time, setTime] = useState(nowTime);
  const [availability, setAvailability] = useState<Record<string, string>>({});

  const checkAvailability = () => {
    const availabilityMap: Record<string, string> = {};

    scheduleData.forEach((item) => {
      if (!availabilityMap[item.classroom]) {
        availabilityMap[item.classroom] = classRoomFreeFrag;
      }
    });

    scheduleData.forEach((item) => {
      if (item.day === day && item.time === time) {
        availabilityMap[item.classroom] = classRoomOccupiedFrag;
      }
    });

    setAvailability(availabilityMap);
  };

  useEffect(() => {
    if (day && time) {
      checkAvailability();
    }
  }, [day, time]);

  return (
    <main id="main">
      <div id="main-container">
        <div className="data-updated">
          <span className="data-updated-header">最終データ更新日</span>
          <span className="data-updated-body">2024年7月20日</span>
        </div>
        <h1>1. 曜日と時間を入力する</h1>
        <div className="search-form">
          <select value={day} onChange={(e) => setDay(e.target.value)}>
            <option value="">曜日を選択</option>
            <option value="月">月曜日</option>
            <option value="火">火曜日</option>
            <option value="水">水曜日</option>
            <option value="木">木曜日</option>
            <option value="金">金曜日</option>
          </select>
          <select value={time} onChange={(e) => setTime(e.target.value)}>
            <option value="">時間を選択</option>
            <option value="1">1限</option>
            <option value="2">2限</option>
            <option value="3">3限</option>
            <option value="4">4限</option>
            <option value="5">5限</option>
            <option value="6">6限</option>
          </select>
        </div>
        <div className="result">
          <h1>2. 空き教室を見つける</h1>
          <a className="campus-map-url" href="https://www.wakayama-u.ac.jp/_files/00703642/HP20231006.pdf">
            ▶ キャンパスマップはこちら ◀
          </a>
          <table>
            <tbody>
              {Object.entries(availability).map(([classroom, status]) => (
                <ClassRoomStatusDisplay key={classroom} roomName={classroom} status={status} showOnEnabled={true} />
              ))}
              {Object.entries(availability).map(([classroom, status]) => (
                <ClassRoomStatusDisplay key={classroom} roomName={classroom} status={status} showOnEnabled={false} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default MainComponent;
