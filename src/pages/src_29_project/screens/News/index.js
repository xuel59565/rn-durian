import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
} from 'react-native';
import React, {Component} from 'react';
import {getNewsList} from '../../utils/api';

import Loading from '../../components/Loading';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Index extends Component {
  constructor() {
    super();

    this.state = {
      type: 'top',
      list: [],
      types: [
        {key: 'top', title: '头条'},
        {key: 'shehui', title: '社会'},
        {key: 'guonei', title: '国内'},
        {key: 'guoji', title: '国际'},
        {key: 'yule', title: '娱乐'},
        {key: 'tiyu', title: '体育'},
        {key: 'junshi', title: '军事'},
        {key: 'keji', title: '科技'},
        {key: 'caijing', title: '财经'},
        {key: 'shishang', title: '时尚'},
      ],
      initialTypeIndex: 0,
    };
  }

  componentDidMount() {
    this.getList();
  }

  getList = () => {
    const type = this.state.type;
    //真數據
    // getNewsList(type)
    //   .then(res => {
    //     console.log('结果？', res);
    //     this.setState({
    //       list: res,
    //     });
    //   })
    //   .catch(err => {
    //     Alert.alert('错误', JSON.stringify(err));
    //   });
    // 假數據

    this.setState({
      list: [
        {
          author_name: '关注健康',
          category: '头条',
          date: '2024-06-25 14:59:00',
          is_content: '1',
          thumbnail_pic_s:
            'https://dfzximg02.dftoutiao.com/minimodify/20240625/1200x642_667a6ac42a541_mwpm_03201609.jpeg',
          title: '长沙有商铺积水淹到大腿，路边多车被泡',
          uniquekey: '44b5e0e574539d26d9992cb6e5ebeb5b',
          url: 'https://mini.eastday.com/mobile/240625145916759449162.html',
        },
        {
          author_name: '关注健康',
          category: '头条',
          date: '2024-06-25 14:58:00',
          is_content: '1',
          thumbnail_pic_s:
            'https://dfzximg02.dftoutiao.com/minimodify/20240625/1200x800_667a6a98126e4_mwpm_03201609.jpeg',
          title: '如何照顾新生儿，武汉市东西湖区举办巾帼巧娘母婴护理培训班',
          uniquekey: '3e400124ab3175e411c3899b9a899cd4',
          url: 'https://mini.eastday.com/mobile/240625145832638375359.html',
        },
        {
          author_name: '关注健康',
          category: '头条',
          date: '2024-06-25 14:57:00',
          is_content: '1',
          thumbnail_pic_s:
            'https://dfzximg02.dftoutiao.com/minimodify/20240625/609x729_667a6a74aef51_mwpm_03201609.jpeg',
          title: '上海地铁通报：一乘客擅自拉下紧急拉手致全列车迫停站台',
          uniquekey: '4743952086ad54f43ca5b0329a9809ef',
          url: 'https://mini.eastday.com/mobile/240625145757230974716.html',
        },
        {
          author_name: '关注健康',
          category: '头条',
          date: '2024-06-25 14:57:00',
          is_content: '1',
          thumbnail_pic_s:
            'https://dfzximg02.dftoutiao.com/minimodify/20240625/640x337_667a6a51a4dd9_mwpm_03201609.jpeg',
          thumbnail_pic_s02:
            'https://dfzximg02.dftoutiao.com/minimodify/20240625/640x358_667a6a523d363_mwpm_03201609.jpeg',
          thumbnail_pic_s03:
            'https://dfzximg02.dftoutiao.com/minimodify/20240625/1200x719_667a6a52bdbcd_mwpm_03201609.jpeg',
          title: '入境大货车备胎内藏毒92斤被查获',
          uniquekey: 'cdf0437a09f7e784bfa4845c79021ff6',
          url: 'https://mini.eastday.com/mobile/240625145723218607974.html',
        },
        {
          author_name: '关注健康',
          category: '头条',
          date: '2024-06-25 14:56:00',
          is_content: '1',
          thumbnail_pic_s:
            'https://dfzximg02.dftoutiao.com/minimodify/20240625/675x900_667a6a083a091_mwpm_03201609.jpeg',
          thumbnail_pic_s02:
            'https://dfzximg02.dftoutiao.com/minimodify/20240625/418x900_667a6a0fd0abc_mwpm_03201609.jpeg',
          thumbnail_pic_s03:
            'https://dfzximg02.dftoutiao.com/minimodify/20240625/301x900_667a6a1765f06_mwpm_03201609.jpeg',
          title: '考完试了课还没上完，市民找培训机构退款被拒',
          uniquekey: 'c9050e62c8c69daf9d7d5673c886ca05',
          url: 'https://mini.eastday.com/mobile/240625145623843149438.html',
        },
        {
          author_name: '关注健康',
          category: '头条',
          date: '2024-06-25 14:53:00',
          is_content: '1',
          thumbnail_pic_s:
            'https://dfzximg02.dftoutiao.com/minimodify/20240625/1200x900_667a694f5b802_mwpm_03201609.jpeg',
          thumbnail_pic_s02:
            'https://dfzximg02.dftoutiao.com/minimodify/20240625/1200x1444_667a69502a278_mwpm_03201609.jpeg',
          thumbnail_pic_s03:
            'https://dfzximg02.dftoutiao.com/minimodify/20240625/1200x1200_667a6950b1f9e_mwpm_03201609.jpeg',
          title: '入梅首轮强降雨考验高速公路，湖北高速交警全力以赴保安全、保畅',
          uniquekey: 'c2fd399093678bb53585cc983c42a4c5',
          url: 'https://mini.eastday.com/mobile/240625145305145830080.html',
        },
        {
          author_name: '关注健康',
          category: '头条',
          date: '2024-06-25 14:51:00',
          is_content: '1',
          thumbnail_pic_s:
            'https://dfzximg02.dftoutiao.com/minimodify/20240625/640x427_667a6909080ad_mwpm_03201609.jpeg',
          thumbnail_pic_s02:
            'https://dfzximg02.dftoutiao.com/minimodify/20240625/640x426_667a6909a13f0_mwpm_03201609.jpeg',
          thumbnail_pic_s03:
            'https://dfzximg02.dftoutiao.com/minimodify/20240625/640x426_667a690a15c85_mwpm_03201609.jpeg',
          title: '武汉市江岸区开展“6·26”禁毒主题宣传活动',
          uniquekey: '71e1b02276c8d59edc214a187a091ea4',
          url: 'https://mini.eastday.com/mobile/240625145155389955462.html',
        },
        {
          author_name: '关注健康',
          category: '头条',
          date: '2024-06-25 14:50:00',
          is_content: '1',
          thumbnail_pic_s:
            'https://dfzximg02.dftoutiao.com/minimodify/20240625/640x480_667a68d0dac6a_mwpm_03201609.jpeg',
          title: '一岁萌宝办理身份证，民警各种“花招”齐上阵',
          uniquekey: '1936e04acfc6a2406efba42627a89041',
          url: 'https://mini.eastday.com/mobile/240625145057778273123.html',
        },
        {
          author_name: '华商网',
          category: '头条',
          date: '2024-06-25 14:50:00',
          is_content: '1',
          thumbnail_pic_s: '',
          title:
            '2024西安中考|西安名师点评中考物理：突出能量板块知识考察 难度梯度分布合理',
          uniquekey: '87a718ae93a2fe4670c9e0198589f03a',
          url: 'https://mini.eastday.com/mobile/240625145019878654803.html',
        },
        {
          author_name: '关注健康',
          category: '头条',
          date: '2024-06-25 14:50:00',
          is_content: '1',
          thumbnail_pic_s:
            'https://dfzximg02.dftoutiao.com/minimodify/20240625/640x471_667a68aa5f0d8_mwpm_03201609.jpeg',
          title: '货车变客车？谷城交警查处两起货车违法载人行为，竟然是同一批人',
          uniquekey: '46bcb98f72db0430464c9717a7c8b86e',
          url: 'https://mini.eastday.com/mobile/240625145018878830682.html',
        },
        {
          author_name: '关注健康',
          category: '头条',
          date: '2024-06-25 14:49:00',
          is_content: '1',
          thumbnail_pic_s:
            'https://dfzximg02.dftoutiao.com/minimodify/20240625/640x426_667a6873979b8_mwpm_03201609.jpeg',
          thumbnail_pic_s02:
            'https://dfzximg02.dftoutiao.com/minimodify/20240625/640x426_667a687439045_mwpm_03201609.jpeg',
          thumbnail_pic_s03:
            'https://dfzximg02.dftoutiao.com/minimodify/20240625/640x854_667a6874b041e_mwpm_03201609.jpeg',
          title: '咸宁老党员百岁生日交纳万元党费，一心向党彰显党员本色',
          uniquekey: 'b4ea83a2b3855be0c1f5a8ab2dd741c8',
          url: 'https://mini.eastday.com/mobile/240625144925782590267.html',
        },
        {
          author_name: '杭州网',
          category: '头条',
          date: '2024-06-25 14:49:00',
          is_content: '1',
          thumbnail_pic_s:
            'https://dfzximg02.dftoutiao.com/news/20240625/20240625144917_4f33ca4f56f301222a9e349145c90eab_1_mwpm_03201609.jpeg',
          thumbnail_pic_s02:
            'https://dfzximg02.dftoutiao.com/news/20240625/20240625144917_4f33ca4f56f301222a9e349145c90eab_2_mwpm_03201609.jpeg',
          thumbnail_pic_s03:
            'https://dfzximg02.dftoutiao.com/news/20240625/20240625144917_4f33ca4f56f301222a9e349145c90eab_3_mwpm_03201609.jpeg',
          title: '万万不可“一时冲动、心存侥幸”！两人高空抛物被刑拘',
          uniquekey: '50d870b3c1b677bdc27381a58ac28e5e',
          url: 'https://mini.eastday.com/mobile/240625144917971692105.html',
        },
        {
          author_name: '杭州网',
          category: '头条',
          date: '2024-06-25 14:49:00',
          is_content: '1',
          thumbnail_pic_s: '',
          title: '风雨无阻！建德沿江养老院82名老人全部安全转移',
          uniquekey: 'a69508c3486a1b6848c168aa3502f90a',
          url: 'https://mini.eastday.com/mobile/240625144912095123022.html',
        },
        {
          author_name: '搜狐文化',
          category: '头条',
          date: '2024-06-25 14:49:00',
          is_content: '1',
          thumbnail_pic_s:
            'https://dfzximg02.dftoutiao.com/news/20240625/20240625144903_677a7c28b1bad606b1e28ac24f81d65f_1_mwpm_03201609.jpeg',
          thumbnail_pic_s02:
            'https://dfzximg02.dftoutiao.com/news/20240625/20240625144903_677a7c28b1bad606b1e28ac24f81d65f_2_mwpm_03201609.jpeg',
          title: '重塑童书出版的未来：中信出版少儿文化集团发布多元立体阅读体系',
          uniquekey: '575aa45f3d77a0a70200ab15a85552fc',
          url: 'https://mini.eastday.com/mobile/240625144903907112032.html',
        },
        {
          author_name: '关注健康',
          category: '头条',
          date: '2024-06-25 14:48:00',
          is_content: '1',
          thumbnail_pic_s:
            'https://dfzximg02.dftoutiao.com/minimodify/20240625/640x426_667a68511bbd2_mwpm_03201609.jpeg',
          thumbnail_pic_s02:
            'https://dfzximg02.dftoutiao.com/minimodify/20240625/640x426_667a6851983bb_mwpm_03201609.jpeg',
          thumbnail_pic_s03:
            'https://dfzximg02.dftoutiao.com/minimodify/20240625/640x960_667a68523176e_mwpm_03201609.jpeg',
          title: '浙江湖州：积极推进农田万亩方连片整治',
          uniquekey: 'df95ee4926b74e26a6992c9cdd772e7f',
          url: 'https://mini.eastday.com/mobile/240625144851271702484.html',
        },
        {
          author_name: '关注健康',
          category: '头条',
          date: '2024-06-25 14:48:00',
          is_content: '1',
          thumbnail_pic_s:
            'https://dfzximg02.dftoutiao.com/minimodify/20240625/1200x675_667a682dd1bf7_mwpm_03201609.jpeg',
          title: '上海一公司遭“有精神问题”的快递员砸门威胁？',
          uniquekey: 'd6d57acf720da574265fba23fbf7c470',
          url: 'https://mini.eastday.com/mobile/240625144814437464942.html',
        },
        {
          author_name: '关注健康',
          category: '头条',
          date: '2024-06-25 14:47:00',
          is_content: '1',
          thumbnail_pic_s:
            'https://dfzximg02.dftoutiao.com/minimodify/20240625/1200x1600_667a680979d9b_mwpm_03201609.jpeg',
          thumbnail_pic_s02:
            'https://dfzximg02.dftoutiao.com/minimodify/20240625/1200x1600_667a680a66913_mwpm_03201609.jpeg',
          thumbnail_pic_s03:
            'https://dfzximg02.dftoutiao.com/minimodify/20240625/1200x1600_667a680b0ca60_mwpm_03201609.jpeg',
          title: '租客忘关水龙头致屋内“水漫金山”连累楼下住户',
          uniquekey: '2da68fb83e9865af789be1a38f55b46d',
          url: 'https://mini.eastday.com/mobile/240625144739496240760.html',
        },
        {
          author_name: '关注健康',
          category: '头条',
          date: '2024-06-25 14:43:00',
          is_content: '1',
          thumbnail_pic_s:
            'https://dfzximg02.dftoutiao.com/minimodify/20240625/640x482_667a67023c1ab_mwpm_03201609.jpeg',
          title: '聚焦防汛抗旱｜直击安徽黄山防汛抢险中的“分秒必争”',
          uniquekey: 'ead94949720bdb7f3383354a91c2bc58',
          url: 'https://mini.eastday.com/mobile/240625144314692402281.html',
        },
        {
          author_name: '江南时报',
          category: '头条',
          date: '2024-06-25 14:42:00',
          is_content: '1',
          thumbnail_pic_s:
            'https://dfzximg02.dftoutiao.com/news/20240625/20240625144203_0c463de7a2342f346216193e24318ff8_1_mwpm_03201609.jpeg',
          thumbnail_pic_s02:
            'https://dfzximg02.dftoutiao.com/news/20240625/20240625144203_0c463de7a2342f346216193e24318ff8_2_mwpm_03201609.jpeg',
          thumbnail_pic_s03:
            'https://dfzximg02.dftoutiao.com/news/20240625/20240625144203_0c463de7a2342f346216193e24318ff8_3_mwpm_03201609.jpeg',
          title: '众泾社区开展“传承劳模精神 汲取奋进力量”道德讲堂',
          uniquekey: '01b8039e98bef69e0c4b1e9673b9c1ad',
          url: 'https://mini.eastday.com/mobile/240625144203310852700.html',
        },
        {
          author_name: '河北新闻网',
          category: '头条',
          date: '2024-06-25 14:40:00',
          is_content: '1',
          thumbnail_pic_s:
            'https://dfzximg02.dftoutiao.com/news/20240625/20240625144040_0be43e096c4a393e71a5b76f95f79db7_1_mwpm_03201609.jpeg',
          thumbnail_pic_s02:
            'https://dfzximg02.dftoutiao.com/news/20240625/20240625144040_0be43e096c4a393e71a5b76f95f79db7_2_mwpm_03201609.jpeg',
          title: '河北高考要报志愿啦！注意这些事，很重要',
          uniquekey: 'fd2965e87d7dd7fd9c51323d6bfe9b21',
          url: 'https://mini.eastday.com/mobile/240625144040451175850.html',
        },
        {
          author_name: '中国江苏网',
          category: '头条',
          date: '2024-06-25 14:39:00',
          is_content: '1',
          thumbnail_pic_s: '',
          title: '东海警方：做实暖心警事 守护群众平安',
          uniquekey: '1d81131fa5565b3430e6a45b59a5d098',
          url: 'https://mini.eastday.com/mobile/240625143940667996450.html',
        },
        {
          author_name: '中国江苏网',
          category: '头条',
          date: '2024-06-25 14:39:00',
          is_content: '1',
          thumbnail_pic_s: '',
          title: '小案快破获民心 群众感谢送锦旗',
          uniquekey: '92be3adb1cee7653cbabe8b3ecbd5d90',
          url: 'https://mini.eastday.com/mobile/240625143937664532703.html',
        },
        {
          author_name: '关注健康',
          category: '头条',
          date: '2024-06-25 14:33:00',
          is_content: '1',
          thumbnail_pic_s:
            'https://dfzximg02.dftoutiao.com/minimodify/20240625/1200x900_667a64a55329a_mwpm_03201609.jpeg',
          title: '黄石一七旬老人装“孙子”，假扮远亲专骗老人钱财',
          uniquekey: '1c3efa5d7bcdc64b55c1533081afd38b',
          url: 'https://mini.eastday.com/mobile/240625143309868898602.html',
        },
        {
          author_name: '关注健康',
          category: '头条',
          date: '2024-06-25 14:32:00',
          is_content: '1',
          thumbnail_pic_s:
            'https://dfzximg02.dftoutiao.com/minimodify/20240625/1200x784_667a648c93338_mwpm_03201609.jpeg',
          thumbnail_pic_s02:
            'https://dfzximg02.dftoutiao.com/minimodify/20240625/1200x738_667a648d6eea8_mwpm_03201609.jpeg',
          thumbnail_pic_s03:
            'https://dfzximg02.dftoutiao.com/minimodify/20240625/1200x821_667a648e11ad4_mwpm_03201609.jpeg',
          title: '稳居首位！湖北荆门东宝“小巨人”企业打造自身硬核实力',
          uniquekey: '63f4dc02128bb84f050ac33d09ff7360',
          url: 'https://mini.eastday.com/mobile/240625143247070644950.html',
        },
        {
          author_name: '关注健康',
          category: '头条',
          date: '2024-06-25 14:32:00',
          is_content: '1',
          thumbnail_pic_s:
            'https://dfzximg02.dftoutiao.com/minimodify/20240625/640x522_667a6468436b6_mwpm_03201609.jpeg',
          thumbnail_pic_s02:
            'https://dfzximg02.dftoutiao.com/minimodify/20240625/640x480_667a6468d15e8_mwpm_03201609.jpeg',
          thumbnail_pic_s03:
            'https://dfzximg02.dftoutiao.com/minimodify/20240625/640x480_667a64698a183_mwpm_03201609.jpeg',
          title: '乐考无“纸”境，小学生趣味闯关体验学习乐趣',
          uniquekey: '5fd9505cf372b71e0a37d9402f382c39',
          url: 'https://mini.eastday.com/mobile/240625143209955395743.html',
        },
        {
          author_name: '大众报业·齐鲁壹点',
          category: '头条',
          date: '2024-06-25 14:32:00',
          is_content: '1',
          thumbnail_pic_s:
            'https://dfzximg02.dftoutiao.com/news/20240625/20240625143200_af077a29e842e03f74dc7295ac19f798_1_mwpm_03201609.jpeg',
          thumbnail_pic_s02:
            'https://dfzximg02.dftoutiao.com/news/20240625/20240625143200_af077a29e842e03f74dc7295ac19f798_2_mwpm_03201609.jpeg',
          thumbnail_pic_s03:
            'https://dfzximg02.dftoutiao.com/news/20240625/20240625143200_af077a29e842e03f74dc7295ac19f798_3_mwpm_03201609.jpeg',
          title: '“送孩子的画上太空“全国巡演首站泰安启动 三只小牛助力航天梦',
          uniquekey: '8d7f4a25eb8fe3430cd98b0a8dbbb276',
          url: 'https://mini.eastday.com/mobile/240625143200939600993.html',
        },
        {
          author_name: '大众报业·齐鲁壹点',
          category: '头条',
          date: '2024-06-25 14:31:00',
          is_content: '1',
          thumbnail_pic_s: '',
          title: '威海市市级职工（劳模）疗休养基地名单公布！',
          uniquekey: 'bbfff069a867028d295df2c0ddcd97ed',
          url: 'https://mini.eastday.com/mobile/240625143154700494362.html',
        },
        {
          author_name: '关注健康',
          category: '头条',
          date: '2024-06-25 14:31:00',
          is_content: '1',
          thumbnail_pic_s:
            'https://dfzximg02.dftoutiao.com/minimodify/20240625/640x480_667a6437ed997_mwpm_03201609.jpeg',
          title: '湖北力争今年家电以旧换新超100万台',
          uniquekey: '2c79099382b8144985ac8209268ef880',
          url: 'https://mini.eastday.com/mobile/240625143120438538717.html',
        },
        {
          author_name: '关注健康',
          category: '头条',
          date: '2024-06-25 14:30:00',
          is_content: '1',
          thumbnail_pic_s:
            'https://dfzximg02.dftoutiao.com/minimodify/20240625/1200x800_667a640d03861_mwpm_03201609.jpeg',
          thumbnail_pic_s02:
            'https://dfzximg02.dftoutiao.com/minimodify/20240625/1200x900_667a640db8fd8_mwpm_03201609.jpeg',
          thumbnail_pic_s03:
            'https://dfzximg02.dftoutiao.com/minimodify/20240625/1200x800_667a640eeb0ef_mwpm_03201609.jpeg',
          title: '湖北浠水禁毒宣传进校园，共筑青春防护墙',
          uniquekey: '6bceec4291d240edbe1561c3c4228d0f',
          url: 'https://mini.eastday.com/mobile/240625143042448713764.html',
        },
        {
          author_name: '当代先锋网',
          category: '头条',
          date: '2024-06-25 14:29:00',
          is_content: '1',
          thumbnail_pic_s:
            'https://dfzximg02.dftoutiao.com/news/20240625/20240625142937_7d41c897ee399d8ca114a0b5ffb55565_1_mwpm_03201609.jpeg',
          thumbnail_pic_s02:
            'https://dfzximg02.dftoutiao.com/news/20240625/20240625142937_7d41c897ee399d8ca114a0b5ffb55565_2_mwpm_03201609.jpeg',
          thumbnail_pic_s03:
            'https://dfzximg02.dftoutiao.com/news/20240625/20240625142937_7d41c897ee399d8ca114a0b5ffb55565_3_mwpm_03201609.jpeg',
          title:
            '帮帮哥来了【132】几个鱼缸就办“海洋展” 如此骗局为何能“全国巡演”',
          uniquekey: 'eb2cbd280be90be97d722f726e47c176',
          url: 'https://mini.eastday.com/mobile/240625142937106208749.html',
        },
      ],
    });
  };

  newsItem = ({index, item}) => {
    if (item.thumbnail_pic_s02 && item.thumbnail_pic_s03) {
      return this.newsItemThreeImages({index, item});
    } else {
      return this.newsItemSingleImages({index, item});
    }
  };

  newsItemSingleImages = ({index, item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate('NewsDetail', {
            url: item.url,
            title: item.title,
            uniquekey: item.uniquekey,
          })
        }>
        <View style={[styles.newsItem1Container]}>
          <View style={[styles.newsItem1Text]}>
            <Text style={[styles.newsItem1Title]} numberOfLines={2}>
              {item.title}
            </Text>
            <View style={[styles.newsItem1Footer]}>
              <Text style={[styles.newsItem1Meta]} numberOfLines={1}>
                {`${item.date}  ${item.author_name}`}
              </Text>
              <Icon name={'heart-outline'} size={18} />
            </View>
          </View>
          <Image
            source={{uri: item.thumbnail_pic_s}}
            style={[styles.newsItem1Image]}
          />
        </View>
      </TouchableOpacity>
    );
  };

  newsItemThreeImages = ({index, item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate('NewsDetail', {
            url: item.url,
            title: item.title,
            uniquekey: item.uniquekey,
          })
        }
        style={{marginVertical: 5}}>
        <View style={[styles.newsItemContainer]}>
          <Text
            style={[styles.newsItemHeader]}
            numberOfLines={2}
            ellipsizeMode="tail">
            {item.title}
          </Text>
          <View>
            <View style={[styles.newsItemImageContainer]}>
              <Image
                style={[styles.newsItemImage]}
                source={{uri: item.thumbnail_pic_s}}
              />
              <Image
                style={[styles.newsItemImage]}
                source={{uri: item.thumbnail_pic_s02}}
              />
              <Image
                style={[styles.newsItemImage]}
                source={{uri: item.thumbnail_pic_s03}}
              />
            </View>
          </View>
          <View style={[styles.newsItem1Footer]}>
            <Text numberOfLines={1} style={[styles.newsItem1Meta]}>
              {item.date}
              {item.author_name}
            </Text>
            <Icon name={'heart-outline'} size={18} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  newsType = ({index, item}) => {
    let isActive = item.key == this.state.type;
    return (
      <TouchableOpacity
        onPress={() =>
          this.setState(
            {
              type: item.key,
              initialTypeIndex: index > 3 ? index - 3 : 0,
            },
            () => {
              this.getList();
            },
          )
        }>
        <View
          style={{
            width: 65,
            height: 46,
            padding: 10,
            backgroundColor: isActive ? '#f19c5d' : '#fff',
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
              textAlign: 'center',
              color: isActive ? '#fff' : 'black',
            }}>
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  // 添加 getItemLayout 方法
  getItemLayout = (data, index) => ({
    length: 100, // 每个列表项的高度或宽度
    offset: 100 * index, // 列表项在整个列表中的位置
    index,
  });

  render() {
    return (
      <>
        {this.state.list.length ? (
          <FlatList
            data={this.state.list}
            renderItem={this.newsItem}
            keyExtractor={item => item.uniquekey}
            ListHeaderComponent={() => {
              return (
                <FlatList
                  horizontal={true}
                  data={this.state.types}
                  keyExtractor={item => item.key}
                  renderItem={this.newsType}
                  initialScrollIndex={this.state.initialTypeIndex}
                  getItemLayout={(data, index) => ({
                    length: 65,
                    offset: 65 * index,
                    index,
                  })}
                />
              );
            }}
            ListFooterComponent={() => {
              return (
                <Text
                  style={{
                    fontSize: 20,
                    textAlign: 'center',
                    marginVertical: 40,
                  }}>
                  ---没有更多了---
                </Text>
              );
            }}
            ItemSeparatorComponent={() => {
              // 列表项分割线组件
              return (
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: '#ccc',
                    marginVertical: 5,
                  }}
                />
              );
            }}
            // 添加 getItemLayout 方法
            getItemLayout={this.getItemLayout}
            onScrollToIndexFailed={info => {
              const wait = new Promise(resolve => setTimeout(resolve, 500));
              wait.then(() => {
                this.flatListRef.scrollToIndex({
                  index: info.index,
                  animated: true,
                });
              });
            }}
            ref={ref => (this.flatListRef = ref)}
          />
        ) : (
          <Loading />
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  newsItem1Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  newsItem1Text: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: (Dimensions.get('window').width * 2) / 3 - 20,
  },
  newsItem1Title: {
    paddingHorizontal: 10,
    fontSize: 18,
    width: (Dimensions.get('window').width * 2) / 3,
    marginBottom: 20,
  },
  newsItem1Footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  newsItem1Meta: {
    fontSize: 13,
  },
  newsItem1Image: {
    width: Dimensions.get('window').width / 3,
    height: 80,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  newsItemContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  newsItemImageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  newsItemImage: {
    width: Dimensions.get('window').width / 3 - 20,
    height: 80,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  newsItemHeader: {
    paddingHorizontal: 10,
    fontSize: 18,
  },
});
