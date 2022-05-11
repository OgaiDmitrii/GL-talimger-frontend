import Main from '../templates/main'
import { Box,Flex,Text, Divider } from '@chakra-ui/react'
import Image from 'next/image'
import About1 from "./img/About1.jpg"
import About2 from "./img/About2.jpg"

export default function About() {
  return (
    <Main>
      <Flex direction="column">
        <Flex alignItems="center" justifyContent="center" backgroundColor="rgba(255,255,255,0.8)" padding={5} mb="20px">
          <Box width="33%">
            <Image src={About1} quality={100}/>
          </Box>
          <Box width="66%" pl="1%" >
            <Text fontSize="28px">ГУЛЬНАР КУСИДЕНОВА</Text>
            <Text fontSize={18}>УЧРЕДИТЕЛЬ</Text>
            <Divider borderColor="facebook.500" mt={5} mb={5} />
            <Text fontSize={18}  pb={2}>Магистр технических наук, член Евразийской Ассоциации оценки качества образования,</Text>
            <Text fontSize={18}  pb={2}>Учредитель ОФ «Независимая лига экспертов образования»,</Text> 
            <Text fontSize={18}  pb={2}>Автор-разработчик «Методологии подготовки по самооценке образовательной деятельности» и образовательных программ курсов повышения квалификации (15 свидетельств авторских прав интеллектуальной собственности),</Text>
            <Text fontSize={18}  pb={2}>Член независимых судей Национальной премии «Учитель Казахстана»,</Text>
            <Text fontSize={18}  pb={2}>Руководитель Лаборатории проблем непрерывного педагогического образования НАО им. Ы. Алтынсарина</Text>
            <Text fontSize={18}  pb={2}>Международный эксперт Всемирного Банка</Text>
            <Text fontSize={18}  pb={2}>Опыт работы <b>30+</b></Text>
          </Box>
        </Flex>
        <Flex alignItems="center" justifyContent="center" backgroundColor="rgba(255,255,255,0.8)" padding={5}>
          <Box width="33%">
            <Image src={About2} quality={100}/>
          </Box>
          <Box width="66%" pl="1%" >
            <Text fontSize="28px">ЛАЗЗАТ БУЛЕБАЕВА</Text>
            <Text fontSize={18}>ГЕНЕРАЛЬНЫЙ ДИРЕКТОР</Text>
            <Divider borderColor="facebook.500" mt={5} mb={5} />
            <Text fontSize={18}  pb={2}>Магистр социальных наук</Text> 
            <Text fontSize={18}  pb={2}>Национальная школа государственной политики Академии государственного управления при Президенте РК, Университет Дьюка (Duke University), Сэнфорд школа государственной политики (Sanfordschoolof Public Policy), штат Северная Каролина, США. 
Заместитель Председателя Комитета по контролю в сфере образования и науки МОН РК, 2012 - 2018 гг, разработчик НПА, в т.ч. в сфере гос.регулирования, внешней оценки качества образования, государственной аттестации, лицензирования
Обладатель авторского права на объекты интеллектуальной собственности «Методология подготовки по самооценке образовательной деятельности», Университетская школа «Unischool», «Серебряный университет», партнер проведения региональных воркшопов финалистов Национальной премии «Учитель Казахстана».</Text>
            <Text fontSize={18}  pb={2}>Опыт государственной службы <b>20+</b></Text>
          </Box>
        </Flex>
      </Flex>
    </Main>
  )
}
