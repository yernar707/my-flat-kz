import React from "react"
import Collapsible from 'react-collapsible';



export default function Questions({ children }) {
  return (
      <div className="questions">
      <div className="paragraph-title">
          <p>Вопрос-ответ</p>
      </div>
        <div className="body-back services-container">
            <div className="">
                <Collapsible className="qcollapse" triggerSibling={() =>
                        <span className="plus-sign">+</span>
                } triggerTagName="div" openedClassName="opened-qcollapse" trigger="Сколько будет стоить 2х комнатная квартира?">
                    
                    <p>
                    Стоимость напрямую зависит от инфраструктуры комплекса, отдаленности от моря, этажности и тд<br></br>
                    1+1( 2х комнатная квартира)<br></br>
                    от 47 000 евро в чистовом варианте.<br></br>
                    Так же можно найти 1+1 на вторичном рынке полностью мебелированную под ключ от<br></br>
                    65 000 евро.
                    </p>
                </Collapsible>
                <Collapsible className="qcollapse" triggerSibling={() =>
                        <span className="plus-sign">+</span>
                } triggerTagName="div" openedClassName="opened-qcollapse" trigger="Есть ли у Вас ипотека для иностранных граждан?">
                    
                    <p>
                    Стоимость напрямую зависит от инфраструктуры комплекса, отдаленности от моря, этажности и тд<br></br>
                    1+1( 2х комнатная квартира)<br></br>
                    от 47 000 евро в чистовом варианте.<br></br>
                    Так же можно найти 1+1 на вторичном рынке полностью мебелированную под ключ от<br></br>
                    65 000 евро.
                    </p>
                </Collapsible>
                <Collapsible className="qcollapse" triggerSibling={() =>
                        <span className="plus-sign">+</span>
                } triggerTagName="div" openedClassName="opened-qcollapse" trigger="У вас есть туристические услуги?">
                    
                    <p>
                    Стоимость напрямую зависит от инфраструктуры комплекса, отдаленности от моря, этажности и тд<br></br>
                    1+1( 2х комнатная квартира)<br></br>
                    от 47 000 евро в чистовом варианте.<br></br>
                    Так же можно найти 1+1 на вторичном рынке полностью мебелированную под ключ от<br></br>
                    65 000 евро.
                    </p>
                </Collapsible>
                <Collapsible className="qcollapse" triggerSibling={() =>
                        <span className="plus-sign">+</span>
                } triggerTagName="div" openedClassName="opened-qcollapse" trigger="Какие цены за квадратный метр?">
                    
                    <p>
                    Стоимость напрямую зависит от инфраструктуры комплекса, отдаленности от моря, этажности и тд<br></br>
                    1+1( 2х комнатная квартира)<br></br>
                    от 47 000 евро в чистовом варианте.<br></br>
                    Так же можно найти 1+1 на вторичном рынке полностью мебелированную под ключ от<br></br>
                    65 000 евро.
                    </p>
                </Collapsible>
                <Collapsible className="qcollapse" triggerSibling={() =>
                        <span className="plus-sign">+</span>
                } triggerTagName="div" openedClassName="opened-qcollapse" trigger="Стоимость?">
                    
                    <p>
                    Стоимость напрямую зависит от инфраструктуры комплекса, отдаленности от моря, этажности и тд<br></br>
                    1+1( 2х комнатная квартира)<br></br>
                    от 47 000 евро в чистовом варианте.<br></br>
                    Так же можно найти 1+1 на вторичном рынке полностью мебелированную под ключ от<br></br>
                    65 000 евро.
                    </p>
                </Collapsible>
            </div>
        </div>    
      </div>

  )
}
