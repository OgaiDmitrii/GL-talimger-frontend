import { Flex, Text } from '@chakra-ui/react'
import Main from '../templates/main'
import Image from 'next/image'
import training1 from "./img/Training1.png"
import training2 from "./img/training2.png"
import training3 from "./img/training3.png"
import training4 from "./img/training4.png"
import training5 from "./img/training5.png"
import training6 from "./img/training6.png"

export default function Trainings() {
  return (
    <Main>
      <Flex direction="row" justifyContent="center" backgroundColor="rgba(255,255,255,0.8)" padding={5}>
        <Flex direction="column" width="40%">
          <Text fontSize={24} mb="20px"><b>Тренинг по самооценке <br/>образовательной деятельности</b></Text>
          <Text>«…организации образования ежегодно проводят<br/> 
          самооценку образовательной деятельности и <br/>
          представляют материалы самооценки в ведомство <br/>
          уполномоченного органа в области образования, его <br/>
          территориальные подразделения...» (п.4-1 ст. 59 ЗРК «Об <br/>
          образовании»</Text>
          <Flex direction="row" width="100%" justifyContent="center" alignItems="center">
            <Image src={training1} quality={100}></Image>
            <Text width="80%" fontSize={20} color="#FF3399"><b>Кому полезен семинар-<br/>тренинг?</b></Text>
          </Flex>
          <Text>
          для управленческой команды (руководители, заместители <br/>
          руководителя, руководители методических объединений,<br/>
          продвинутые педагоги, кадровый резерв и др.) организаций:<br/> 
          дошкольного образования;<br/>
          начального, основного среднего, общего среднего <br/>
          образования;<br/>
          технического и профессионального, послесреднего <br/>
          образования. 
          </Text>
          <Flex direction="row" width="100%" justifyContent="center" alignItems="center">
            <Image src={training2} quality={100}></Image>
            <Flex direction="column" width="80%" >
              <Text fontSize={20} color="#FF3399"><b>Формат обучения</b></Text>
              <Text>на платформе ZOOM/офлайн</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex direction="column" width="30%">
          <Text fontSize={20}><b>АВТОРСКОЕ <br/>ПРАВО</b></Text>
          <Flex direction="row">
            <Image src={training3} height="243px" max-width="169px" quality={100}/>
          </Flex>
          <Flex direction="row" width="100%" justifyContent="center" alignItems="center">
            <Image src={training4} quality={100}></Image>
            <Text width="80%" fontSize={20} color="#FF3399"><b>Практическая <br/>ценность</b></Text>
          </Flex>
          <Text>
            семинар-тренинг проводится через рассмотрение практических кейсов,<br/>
            применения цифровых технологий, менторство, экспертную поддержку и<br/>
            работу в команде.
          </Text>
          <Flex direction="row" width="100%" justifyContent="center" alignItems="center">
            <Image src={training5} quality={100} ></Image>
            <Flex direction="column" pl="10px" width="80%" >
              <Text fontSize={20} color="#FF3399"><b>Стоимость</b></Text>
              <Text>
                30 000 теңге<br/>
                Оплата принимается  переводом на счет в КАСПИЙ БАНКЕ <br/>
                💳 4400430160303431 <br/>
                📞 +77713611733
              </Text>
            </Flex>
          </Flex>
          
        </Flex>
        <Flex direction="column" width="30%">
          <Flex direction="row" width="100%" justifyContent="center" alignItems="center">
            <Image src={training6} quality={100}></Image>
            <Text width="80%" fontSize={20} color="#FF3399"><b>Самооценка <br/>образовательной <br/>деятельности</b></Text>
          </Flex>
          <Text>
            онлайн платформа для формирования <br/>
            отчета по самооценке <br/>
            образовательной деятельности
          </Text>
        </Flex>
      </Flex>
    </Main>
  )
}
