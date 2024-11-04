import React, { useState } from 'react';
import { 
  Activity, BookOpen, FileText, PieChart, Heart, 
  Sparkles, ArrowLeft, ChevronRight 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

// 恢复 Card 组件
const Card = ({ children, className = '', ...props }) => (
  <div className={`bg-white rounded-lg ${className}`} {...props}>
    {children}
  </div>
);

export default function SceneExamples() {
  const [selectedScene, setSelectedScene] = useState(null);

  const scenes = [
    {
      icon: <Activity />,
      title: "错别字检测",
      description: "AI智能识别文档错别字",
      gradient: "from-blue-400 to-blue-500",
      content: `患者姓名：张三
病房号：A201
日期：2023年10月1日
时间：08:00

护理记录：
患者今早诉头痛加剧，精神状态欠佳。测量体温36.8℃，脉搏80次/分，呼吸20次/分，血压120/80mmHg。已遵医嘱给予止痛药物。患者饮食尚可，但胃口不佳。

签名：护士李四`,
      aiOutput: `护理记录（修改建议）：
患者今早诉头痛加剧，精神状态欠佳。测量体**温**36.8℃，脉搏80次/分，呼吸20次/分，血压120/80mmHg。已遵医嘱给予止痛药物。患者饮食尚可，但胃口不佳。

标注：
- "体文"应为"体温"。
`
    },
    {
      icon: <FileText />,
      title: "生成SBAR交班报告",
      description: "智能生成规范交接班文档",
      gradient: "from-purple-400 to-purple-500",
      content: `基本信息：

患者姓名：李华
性别：男
年龄：65岁
诊断：肺炎
入院评估单：

入院日期：2023年10月1日
主要症状：咳嗽、发热、呼吸困难
护理记录单（过去24小时）：

10月2日 08:00：体温38.5℃，脉搏90次/分，呼吸22次/分，血压130/85mmHg。给予退热药物。
10月2日 14:00：体温37.8℃，症状有所缓解。患者进食正常。
10月2日 20:00：体温38.0℃，咳嗽加重，痰液增多。`,
      aiOutput: `**S（情况）**：
李华，男，65岁，因肺炎于2023年10月1日入院。目前主要症状为发热、咳嗽、呼吸困难。

**B（背景）**：
患者入院时体温38.5℃，脉搏90次/分，呼吸22次/分。已按照医嘱给予抗生素治疗和退热处理。

**A（评估）**：
过去24小时内，患者体温有所波动，最低37.8℃，最高38.5℃。下午症状有所缓解，但晚间咳嗽加重，痰液增多。生命体征基本平稳，但需密切监测。

**R（建议）**：
建议继续观察体温变化，关注咳嗽和痰液情况。如体温持续升高或症状加重，需及时通知医生调整治疗方案。

签名：护士王五
日期：2023年10月2日
`
    },
    {
      icon: <PieChart />,
      title: "病情变化摘要",
      description: "AI分析患者病情发展轨迹",
      gradient: "from-green-400 to-green-500",
      content: `患者王芳，女性，50岁，因高血压入院。过去一周的记录摘要：

10月1日：

血压：150/95mmHg，头痛。
给予降压药物。
10月2日：

血压：145/90mmHg，头痛减轻。
10月3日：

血压：140/85mmHg，症状明显好转。
10月4日：

血压：138/80mmHg，患者自觉良好。
10月5日：

血压：135/78mmHg，开始进行适当的运动。
10月6日：

血压：130/80mmHg，继续观察。
10月7日：

血压：132/82mmHg，准备出院。
`,
      aiOutput: `**病情变化摘要（10月1日-10月7日）**

患者王芳因高血压于10月1日入院，入院时血压为150/95mmHg，伴有头痛症状。经降压药物治疗后，患者血压逐步下降：

- **10月2日**：血压降至145/90mmHg，头痛减轻。
- **10月3日**：血压进一步降至140/85mmHg，症状明显好转。
- **10月4日-10月5日**：血压稳定在135/78mmHg左右，患者自觉良好，开始适当运动。
- **10月6日-10月7日**：血压保持在130/80mmHg左右，病情稳定，计划出院。

总体来看，患者在过去一周内血压控制良好，症状明显改善，治疗效果显著。

签名：护士赵六
日期：2023年10月7日
`
    },
    {
      icon: <BookOpen />,
      title: "健康教育内容优化",
      description: "智能优化患者教育��案",
      gradient: "from-orange-400 to-orange-500",
      content: `患者需要注意低盐饮食，限制钠离子摄入，以控制高血压。遵医嘱服用抗高血压药物，避免并发症的发生。

签名：护士孙七
`,
      aiOutput: `健康教育内容（优化版）：

**饮食建议**：
- 请尽量减少食盐的使用，因为盐中含有的钠会使血压升高。
- 选择新鲜的食物，避免腌制、罐头和加工食品。

**用药指导**：
- 按照医生的指示按时服用降压药物，不要自行停药或更改剂量。

**预防措施**：
- 定期测量血压，记录数值，及时反馈给医生。
- 适当进行轻松的运动，如散步，有助于控制血压。

签名：护士孙七
日期：2023年10月2日
`
    },
    {
      icon: <Heart />,
      title: "生成当日护理要点",
      description: "AI总结关键护理事项",
      gradient: "from-red-400 to-red-500",
      content: `患者张强，男性，45岁，术后恢复期。当天记录汇总：

生命体征记录：

08:00：体温37.0℃，脉搏78次/分，血压125/80mmHg。
12:00：体温37.2℃，脉搏80次/分，血压128/82mmHg。
16:00：体温37.1℃，脉搏79次/分，血压126/81mmHg。
护理记录单：

09:00：患者诉有轻微伤口疼痛，已给予镇痛药物。
14:00：协助患者下床活动，活动耐受良好。
18:00：观察伤口无渗出，换药后伤口清洁干燥。
医嘱执行单：

按时给予抗生素、镇痛药物。
按医嘱进行输液。`,
      aiOutput: `**当日护理要点（10月2日）**

1. **生命体征**：
   - 体温稳定在37.0-37.2℃，无发热迹象。
   - 脉搏和血压正常。

2. **疼痛管理**：
   - 上午9点患者有轻微伤口疼痛，已按医嘱给予镇痛药物，效果良好。

3. **活动情况**：
   - 下午2点协助患者下床活动，耐受情况良好，无头晕或乏力。

4. **伤口护理**：
   - 傍晚6点更换伤口敷料，伤口无渗出，未见红肿感染迹象。

5. **用药和治疗**：
   - 按时执行所有医嘱，给予抗生素和镇痛药物，输液过程顺利，无不良反应。

6. **注意事项**：
   - 继续观察伤口情况，防止感染。
   - 鼓励患者适当活动，促进恢复。

签名：护士周八
`
    }
  ];

  // 恢复完整的 SceneDetail 组件
  const SceneDetail = ({ scene, onBack }) => {
    const [showAiOutput, setShowAiOutput] = useState(false);
  
    return (
      <div className="h-screen bg-gray-100 flex flex-col">
        <div className="bg-white border-b border-gray-200 py-4 px-6">
          <div className="max-w-2xl mx-auto flex items-center">
            <button 
              onClick={onBack}
              className="p-2 hover:bg-gray-100 rounded-full mr-4"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div>
              <h1 className="text-xl font-semibold text-gray-800">{scene.title}</h1>
              <p className="text-sm text-gray-500">{scene.description}</p>
            </div>
          </div>
        </div>
  
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-2xl mx-auto p-6 space-y-6">
            <Card className="border border-gray-200">
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${scene.gradient} text-white`}>
                    {scene.icon}
                  </div>
                  <h2 className="text-lg font-medium text-gray-800">场景内容</h2>
                </div>
                <div className="h-64 overflow-y-auto bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <ReactMarkdown className="prose prose-sm max-w-none">
                    {scene.content}
                  </ReactMarkdown>
                </div>
              </div>
            </Card>
  
            <button 
              className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium 
                       hover:opacity-90 flex items-center justify-center space-x-2"
              onClick={() => setShowAiOutput(true)}
            >
              <Sparkles className="w-5 h-5" />
              <span>点击查看AI输出</span>
            </button>
  
            {showAiOutput && (
              <Card className="border border-gray-200">
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                      <Activity className="w-5 h-5" />
                    </div>
                    <h2 className="text-lg font-medium text-gray-800">AI输出</h2>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <ReactMarkdown className="prose prose-sm max-w-none">
                      {scene.aiOutput}
                    </ReactMarkdown>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    );
  };

  if (selectedScene) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.2 }}
      >
        <SceneDetail scene={selectedScene} onBack={() => setSelectedScene(null)} />
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            "护理文书+AI"场景示例
          </h1>
        </div>
        
        <div className="space-y-4">
          {scenes.map((scene, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.3,
                delay: index * 0.1 
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Card 
                className="group hover:shadow-lg border border-gray-200 cursor-pointer"
                onClick={() => setSelectedScene(scene)}
              >
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${scene.gradient} text-white`}>
                      {scene.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 text-lg">
                        {scene.title}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        {scene.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-blue-600">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
