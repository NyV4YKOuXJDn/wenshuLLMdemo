import React, { useState, useEffect } from 'react';
import { 
  Activity, BookOpen, FileText, PieChart, Heart, 
  Sparkles, ArrowLeft, ChevronRight,
  Stethoscope, Clipboard, Pill, BedDouble, ClipboardCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '', ...props }) => (
  <div className={`bg-white rounded-lg ${className}`} {...props}>
    {children}
  </div>
);

interface Scene {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  content: string;
  aiOutput: string;
}

interface SceneDetailProps {
  scene: Scene;
  onBack: () => void;
}

export default function SceneExamples() {
  const [selectedScene, setSelectedScene] = useState<Scene | null>(null);

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
患者今早诉头痛加剧，精神状态欠佳。测量体文36.8℃，脉搏80次/分，呼吸20次/分，血压120/80mmHg。已遵医嘱给予止痛药物。患者饮食尚可，但胃口不佳。

签名：护士李四`,
      aiOutput: `"体文"应为"体温"。`
    },
    {
      icon: <FileText />,
      title: "生成SBAR交班报告",
      description: "智能生成规范交接班文档",
      gradient: "from-purple-400 to-purple-500",
      content: `基本信息：
- 患者姓名：李华
- 性别：男
- 年龄：65岁
- 诊断：肺炎

入院评估单：
- 入院日期：2023年10月1日
- 主要症状：咳嗽、发热、呼吸困难

护理记录单（过去24小时）：
- 10月2日 08:00：体温38.5℃，脉搏90次/分，呼吸22次/分，血压130/85mmHg。给予退热药物。
- 10月2日 14:00：体温37.8℃，症状有所缓解。患者进食正常。
- 10月2日 20:00：体温38.0℃，咳嗽加重，痰液增多。`,
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
- 血压：150/95mmHg，头痛。
- 给予降压药物。

10月2日：
- 血压：145/90mmHg，头痛减轻。

10月3日：
- 血压：140/85mmHg，症状明显好转。

10月4日：
- 血压：138/80mmHg，患者自觉良好。

10月5日：
- 血压：135/78mmHg，开始进行适当的运动。

10月6日：
- 血压：130/80mmHg，继续观察。

10月7日：
- 血压132/82mmHg，准备出院。
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
      title: "健康教育容优化",
      description: "智能优化患者教育案",
      gradient: "from-orange-400 to-orange-500",
      content: `患者需要注意低盐饮食，限制钠离子摄入，以控制高血压。遵医嘱服用抗高血压药物，避免并发症的发生。

签名：护士孙七
`,
      aiOutput: `健康教育内容：

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
- 08:00：体温37.0℃，脉搏78次/分，血压125/80mmHg。
- 12:00：体温37.2℃，脉搏80次/分，血压128/82mmHg。
- 16:00：体温37.1℃，脉搏79次/分，血压126/81mmHg。

护理记录单：
- 09:00：患者诉有轻微伤口疼痛，已给予镇痛药物。
- 14:00：协助患者下床活动，活动耐受良好。
- 18:00：观察伤口无渗出，换药后伤口清洁干燥。

医嘱执行单：
- 按时给予抗生素、镇痛药物。
- 按医嘱进行输液。`,
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
    },
    {
      icon: <Stethoscope />,
      title: "信息一致性检查",
      description: "xxx",
      gradient: "from-blue-400 to-blue-500",
      content: `入院评估单：
患者姓名：张伟
性别：男
年龄：55岁
诊断：高血压
过敏史：无

护理记录单（第二天）：
患者姓名：张伟
性别：男
年龄：56岁
诊断：高血压
过敏史：青霉素`,
      aiOutput: `**信息一致性检查报告**

患者姓名：张伟

**发现以下不一致信息：**

1. **年龄：**
   - 入院评估单：55岁
   - 护理记录单：56岁
   - **提示**：请核实患者的实际年龄，并确保各表单信息一致。

2. **过敏史：**
   - 入院评估单：无
   - 护理记录单：青霉素
   - **提示**：过敏史信息存在冲突，请立即核实患者是否对青霉素过敏，以确保用药安全。

**建议措施：**

- 与患者或其家属核实实际年龄和过敏史。
- 更新所有相关表单，确保信息一致。
- 如确实存在过敏，应在医嘱和用药记录中予以标注，防止用药错误。

生成时间：2023年10月2日
`
    },
    {
      icon: <Clipboard />,
      title: "关键评估结果摘要",
      description: "xxx",
      gradient: "from-purple-400 to-purple-500",
      content: `GCS评估记录单：
日期：2023年10月2日
睁眼反应（E）：3分
言语反应（V）：4分
运动反应（M）：5分
总分：12分（满分15分）

疼痛评估单：
日期：2023年10月2日
疼痛部位：腹部
疼痛程度（0-10分）：8分
疼痛性质：持续性钝痛
采取措施：已给予止痛药物`,
      aiOutput: `**关键评估结果摘要**

患者姓名：李明

**1. GCS评分：**

- 总分：12分/15分
  - 睁眼反应（E）：3分
  - 言语反应（V）：4分
  - 运动反应（M）：5分
- **解读**：患者意识中度受损，需密切监测意识变化。

**2. 疼痛评估：**

- 疼痛部位：腹部
- 疼痛程度：8分（0-10分）
- 疼痛性质：持续性钝痛
- **解读**：患者处于重度疼痛状态，已给予止痛药物，需评估止痛效果。

**建议措施：**

- 定时监测患者的意识水平和生命体征。
- 评估止痛药物的效果，如疼痛未缓解，需考虑调整镇痛方案。
- 关注患者的其他不适，及时与医生沟通。

生成时间：2023年10月2日
`
    },
    {
      icon: <Pill />,
      title: "用药记录摘要",
      description: "xxx",
      gradient: "from-green-400 to-green-500",
      content: `医嘱长期医嘱：
- 药物A：500mg，口服，每8小时一次
- 药物B：10mg，静脉注射，每日一次

医嘱服药记录单：
药物A：
- 08:00 - 已给予500mg
- 16:00 - 已给予500mg
- 24:00 - 未记录
药物B：
- 10:00 - 已给予10mg`,
      aiOutput: `**用药记录摘要**

患者姓名：王芳

**药物A（500mg，口服，每8小时一次）：**

- 执行情况：
  - 08:00 - 已给予500mg
  - 16:00 - 已给予500mg
  - **24:00 - 未记录**
- **偏离情况：**
  - 24:00的剂量未记录，需核实是否已给予或漏药。

**药物B（10mg，静脉注射，每日一次）：**

- 执行情况：
  - 10:00 - 已给予10mg
- **无偏离**

**建议措施：**

- 核实药物A的24:00剂量是否已给予，如未给予，需立即补充，并评估对患者的影响。
- 加强用药记录的及时性和准确性，避免漏记。

生成时间：2023年10月2日
`
    },
    {
      icon: <BedDouble />,
      title: "冲突医嘱检测",
      description: "xxx",
      gradient: "from-orange-400 to-orange-500",
      content: `新医嘱：
药物C：阿莫西林胶囊，500mg，口服，每8小时一次

患者过敏史记录：
过敏药物：青霉素

患者用药史：
当前正在使用药物D：华法林
`,
      aiOutput: `**冲突医嘱检测报告**

患者姓名：刘丽

**潜在风险：**

1. **药物过敏：**
   - **新医嘱药物**：阿莫西林
   - **过敏史**：青霉素
   - **风险评估**：患者对青霉素过敏，阿莫西林属青霉素类，存在严重过敏反应风险。
   - **建议措施**：立即通知医生，停止阿莫西林医嘱，选择其他非青霉素类抗生素。

2. **药物相互作用：**
   - **当前用药**：华法林
   - **风险评估**：阿莫西林可能增强华法林的抗凝作用，增加出血风险。
   - **建议措施**：如必须使用阿莫西林，需监测凝血功能，并调整华法林剂量。

**总体建议：**

- 立即与医生沟通，调整治疗方案。
- 更新患者的过敏史记录，确保用药安全。

生成时间：2023年10月2日
`
    },
    {
      icon: <ClipboardCheck />,
      title: "分析实验室结果",
      description: "发现异常值并提醒护士关注",
      gradient: "from-red-400 to-red-500",
      content: `血常规：
白细胞计数（WBC）：12 x10^9/L（正常值：4-10 x10^9/L）↑
血红蛋白（Hb）：90 g/L（正常值：120-160 g/L）↓
血小板（PLT）：200 x10^9/L（正常值：100-300 x10^9/L）

生化检查：
血糖（GLU）：6.0 mmol/L（正常值：3.9-6.1 mmol/L）
肌酐（Cr）：150 µmol/L（正常值：44-133 µmol/L）↑`,
      aiOutput: `**实验室结果分析报告**

患者姓名：赵强

**发现以下异常指标：**

1. **白细胞计数（WBC）：12 x10^9/L（正常值：4-10 x10^9/L）↑**
   - **解读**：白细胞计数升高，可能存在感染或炎症反应。
   - **建议措施**：评估患者有无发热、局部感染迹象，通知医生进行进一步检查。

2. **血红蛋白（Hb）：90 g/L（正常值：120-160 g/L）↓**
   - **解读**：血红蛋白降低，患者可能出现贫血症状。
   - **建议措施**：观察患者是否有乏力、头晕等症状，协助查找贫血原因，配合治疗。

3. **肌酐（Cr）：150 µmol/L（正常值：44-133 µmol/L）↑**
   - **解读**：肌酐升高，提示肾功能受损。
   - **建议措施**：监测患者的尿量、浮肿情况，避免使用对肾脏有损害的药物，及时通知医生。

**其他指标均在正常范围内。**

**总体建议：**

- 密切观察患者的临床症状，及时与医生沟通异常结果。
- 记录患者的反应和护理措施，确保患者安全。

生成时间：2023年10月2日
`
    }
  ];

  useEffect(() => {
    console.log('场景总数:', scenes.length);
    console.log('所有场景:', scenes.map(s => s.title));
  }, []);

  // 恢复完整的 SceneDetail 组件
  const SceneDetail = ({ scene, onBack }: SceneDetailProps) => {
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
                  <ReactMarkdown className="prose prose-lg max-w-none">
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
                    <ReactMarkdown className="prose prose-lg max-w-none">
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
