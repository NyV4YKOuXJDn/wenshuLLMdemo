import React, { useState } from 'react';
import { Activity, BookOpen, FileText, PieChart, Heart, Clipboard, 
         Sparkles, Pill, AlertCircle, LineChart, ArrowLeft } from 'lucide-react';

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
      description: "AI智能识别文档错误用字",
      gradient: "from-blue-500 to-cyan-500",
      content: "这是一段示例文本，用来演示错别字检测功能。这里可能包含一些错别字，比如：\n\n1. 医生开了新的处方\n2. 患者体温正常\n3. 需要定期复查\n\n以上内容仅作演示使用。实际使用时，这里会显示真实的医疗文书内容。",
      aiOutput: "AI分析结果：\n\n✓ 文档总体书写规范\n✓ 未发现明显错别字\n✓ 专业术语使用准确\n\n建议：可以适当增加标点符号，提高文档可读性。"
    },
    { 
      icon: <FileText />, 
      title: "生成SBAR交班报告", 
      description: "智能生成规范交接班文档",
      gradient: "from-purple-500 to-pink-500",
      content: "护士交接班记录示例：\n\n患者王某，男，52岁，因胸痛入院。\n目前生命体征平稳，血压 120/80 mmHg。\n医嘱执行情况：已按时服用降压药。\n特殊情况：无。",
      aiOutput: "SBAR格式报告：\n\nS：患者王某，男性，52岁，因胸痛入院\nB：患者目前生命体征平稳\nA：已完成所有医嘱执行\nR：建议继续观察生命体征"
    },
    { 
      icon: <PieChart />, 
      title: "病情变化摘要", 
      description: "AI分析患者病情发展轨迹",
      gradient: "from-green-500 to-emerald-500",
      content: "患者病情记录：\n\n入院时间：2024-01-15\n主诉：反复胸闷、气促2月，加重3天\n\n病情发展：\n1月15日：急性发作，呼吸困难\n1月16日：给予吸氧治疗后好转\n1月17日：复查心电图示ST段改变\n1月18日：心功能较前改善\n\n目前状态：\n- 呼吸平稳，SPO2 98%\n- 未再出现胸闷症状\n- 日常活动耐受良好",
      aiOutput: "病情变化分析：\n\n1. 总体趋势：持续改善\n\n2. 关键节点：\n- 入院：症状急性发作\n- 治疗后：氧合明显改善\n- 现状：基本稳定\n\n3. 注意事项：\n- 继续监测心电图变化\n- 关注活动耐受程度\n- 预防再次急性发作"
    },
    { 
      icon: <BookOpen />, 
      title: "健康教育内容优化", 
      description: "智能优化患者教育方案",
      gradient: "from-orange-500 to-yellow-500",
      content: "冠心病患者出院健康教育：\n\n1. 日常注意事项：\n- 规律作息，避免熬夜\n- 适量运动，循序渐进\n- 清淡饮食，控制油盐\n\n2. 用药指导：\n- 坚持服用医嘱用药\n- 定期测量血压\n\n3. 复诊安排：\n- 每月门诊随访\n- 每周测量体重\n\n4. 紧急情况：\n如出现胸痛等症状及时就医",
      aiOutput: "教育方案优化建议：\n\n1. 内容完善度：90%\n\n2. 改进建议：\n- 添加具体运动方案\n- 补充饮食推荐食谱\n- 增加血压记录表\n\n3. 表达优化：\n- 使用更通俗的语言\n- 添加图文说明\n- 制作便携卡片\n\n4. 个性化建议：\n针对患者年龄和生活习惯，建议采用视频教学"
    },
    { 
      icon: <Heart />, 
      title: "生成当日护理要点", 
      description: "AI总结关键护理事项",
      gradient: "from-red-500 to-rose-500",
      content: "2024年1月20日护理记录：\n\n晨间查房：\n- 患者李某，睡眠可\n- 体温 36.5℃，血压 125/75 mmHg\n- 皮肤完整，末梢循环好\n\n治疗执行：\n- 08:00 常规护理\n- 10:00 配合检查\n- 14:00 伤口换药\n\n观察重点：\n- 疼痛评分变化\n- 血糖监测结果\n- 饮食情况",
      aiOutput: "当日护理要点总结：\n\n1. 重点观察项目：\n- 密切监测生命体征\n- 关注疼痛变化趋势\n- 加强血糖管理\n\n2. 存在的问题：\n- 早间血糖偏高\n- 活动量不足\n\n3. 后续护理建议：\n- 调整胰岛素用量\n- 指导适量活动\n- 加强健康宣教\n\n4. 交接重点：\n重点关注夜间血糖变化"
    }
  ];

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
                  <pre className="whitespace-pre-wrap text-base text-gray-700 leading-relaxed">
                    {scene.content}
                  </pre>
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
                    <pre className="whitespace-pre-wrap text-base text-gray-700 leading-relaxed">
                      {scene.aiOutput}
                    </pre>
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
    return <SceneDetail scene={selectedScene} onBack={() => setSelectedScene(null)} />;
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
            <Card 
              key={index}
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
                
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-blue-50">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
