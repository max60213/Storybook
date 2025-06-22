import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import Testimonials, { TestimonialsProps, TestimonialItem } from './Testimonials';
import './testimonials.css';

// 測試用的推薦資料
const mockTestimonials: TestimonialItem[] = [
  {
    name: "陳阿明",
    position: "藏逸拍賣會 藏逸員",
    avatar: "/api/placeholder/80/80",
    company: "藏逸拍賣會",
    testimonial: "藝信的驗證系統為畫廊提供了更高標準的藝術品鑑證機制，不僅強化交易的信任度，還讓作品來源更加透明可追溯。操作直覺，流程高效，為我們在市場上的專業形象與法律保障帶來了極大助益。"
  },
  {
    name: "李美華",
    position: "畫廊協會 理事長",
    avatar: "/api/placeholder/80/80",
    company: "畫廊協會",
    testimonial: "藝信的驗證系統不僅滿足畫廊協會在法律層面的需求，對於藝術品交易與管理而言，流程簡單直覺，業界夥伴皆能快速上手，大幅提升交易信任與保障。"
  },
  {
    name: "王志強",
    position: "拍賣會 總經理",
    avatar: "/api/placeholder/80/80",
    company: "拍賣會",
    testimonial: "藝信的驗證系統為拍賣會提供了可靠的藝術品鑑證支持，確保每件作品的來源與真實性，提升買家信心。高效的驗證流程讓我們能夠更順暢地運營，確保交易透明、公正，進一步提升市場競爭力。"
  },
  {
    name: "張雅芳",
    position: "藝術收藏家",
    avatar: "/api/placeholder/80/80",
    company: "私人收藏",
    testimonial: "藝信的驗證系統不僅滿足畫廊協會在法律層面的需求，對於藝術品交易與管理而言，流程簡單直覺，業界夥伴皆能快速上手，大幅提升交易信任與保障。"
  }
];

const shortTestimonials: TestimonialItem[] = [
  {
    name: "簡短測試",
    position: "測試員",
    avatar: "/api/placeholder/80/80",
    company: "測試公司",
    testimonial: "這是一個簡短的推薦內容。"
  },
  {
    name: "另一個測試",
    position: "另一個測試員",
    avatar: "/api/placeholder/80/80",
    company: "另一個公司",
    testimonial: "另一個簡短的推薦內容，用於測試不同長度的文字。"
  }
];

// 預設的新推薦項目模板
const defaultNewTestimonial: TestimonialItem = {
  name: "新客戶",
  position: "職位",
  avatar: "/api/placeholder/80/80",
  company: "公司名稱",
  testimonial: "請輸入推薦內容..."
};

// 互動式組件包裝器
const InteractiveTestimonials: React.FC<TestimonialsProps> = (props) => {
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(props.testimonials || mockTestimonials);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<TestimonialItem>(defaultNewTestimonial);

  const addTestimonial = () => {
    setTestimonials([...testimonials, { ...defaultNewTestimonial }]);
  };

  const removeTestimonial = (index: number) => {
    setTestimonials(testimonials.filter((_, i) => i !== index));
  };

  const startEdit = (index: number) => {
    setEditingIndex(index);
    setEditForm({ ...testimonials[index] });
  };

  const saveEdit = () => {
    if (editingIndex !== null) {
      const newTestimonials = [...testimonials];
      newTestimonials[editingIndex] = { ...editForm };
      setTestimonials(newTestimonials);
      setEditingIndex(null);
    }
  };

  const cancelEdit = () => {
    setEditingIndex(null);
    setEditForm(defaultNewTestimonial);
  };

  const handleFormChange = (field: keyof TestimonialItem, value: string) => {
    setEditForm({ ...editForm, [field]: value });
  };

  return (
    <div>
      {/* 控制面板 */}
      <div style={{ 
        padding: '20px', 
        marginBottom: '20px', 
        backgroundColor: '#f5f5f5', 
        borderRadius: '8px',
        fontFamily: 'system-ui, sans-serif'
      }}>
        <h3 style={{ margin: '0 0 16px 0', color: '#333' }}>推薦項目管理</h3>
        
        <div style={{ marginBottom: '16px' }}>
          <button 
            onClick={addTestimonial}
            style={{
              padding: '8px 16px',
              marginRight: '8px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            ➕ 新增推薦
          </button>
          <span style={{ color: '#666' }}>目前共有 {testimonials.length} 個推薦</span>
        </div>

        {/* 推薦項目列表 */}
        <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} style={{
              padding: '12px',
              marginBottom: '8px',
              backgroundColor: 'white',
              borderRadius: '4px',
              border: '1px solid #ddd'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <strong>{testimonial.name}</strong> - {testimonial.position}
                  <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>
                    {testimonial.testimonial.substring(0, 50)}...
                  </div>
                </div>
                <div>
                  <button 
                    onClick={() => startEdit(index)}
                    style={{
                      padding: '4px 8px',
                      marginRight: '4px',
                      backgroundColor: '#28a745',
                      color: 'white',
                      border: 'none',
                      borderRadius: '3px',
                      cursor: 'pointer',
                      fontSize: '12px'
                    }}
                  >
                    ✏️ 編輯
                  </button>
                  <button 
                    onClick={() => removeTestimonial(index)}
                    style={{
                      padding: '4px 8px',
                      backgroundColor: '#dc3545',
                      color: 'white',
                      border: 'none',
                      borderRadius: '3px',
                      cursor: 'pointer',
                      fontSize: '12px'
                    }}
                  >
                    🗑️ 刪除
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 編輯表單 */}
        {editingIndex !== null && (
          <div style={{
            marginTop: '16px',
            padding: '16px',
            backgroundColor: 'white',
            borderRadius: '4px',
            border: '2px solid #007bff'
          }}>
            <h4 style={{ margin: '0 0 12px 0', color: '#007bff' }}>編輯推薦 #{editingIndex + 1}</h4>
            
            <div style={{ display: 'grid', gap: '8px', gridTemplateColumns: '1fr 1fr' }}>
              <input
                type="text"
                placeholder="姓名"
                value={editForm.name}
                onChange={(e) => handleFormChange('name', e.target.value)}
                style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '3px' }}
              />
              <input
                type="text"
                placeholder="職位"
                value={editForm.position}
                onChange={(e) => handleFormChange('position', e.target.value)}
                style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '3px' }}
              />
              <input
                type="text"
                placeholder="公司"
                value={editForm.company}
                onChange={(e) => handleFormChange('company', e.target.value)}
                style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '3px' }}
              />
              <input
                type="text"
                placeholder="頭像 URL"
                value={editForm.avatar}
                onChange={(e) => handleFormChange('avatar', e.target.value)}
                style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '3px' }}
              />
            </div>
            
            <textarea
              placeholder="推薦內容"
              value={editForm.testimonial}
              onChange={(e) => handleFormChange('testimonial', e.target.value)}
              rows={3}
              style={{ 
                width: '100%', 
                padding: '8px', 
                marginTop: '8px',
                border: '1px solid #ddd', 
                borderRadius: '3px',
                resize: 'vertical'
              }}
            />
            
            <div style={{ marginTop: '12px' }}>
              <button 
                onClick={saveEdit}
                style={{
                  padding: '8px 16px',
                  marginRight: '8px',
                  backgroundColor: '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                ✅ 儲存
              </button>
              <button 
                onClick={cancelEdit}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#6c757d',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                ❌ 取消
              </button>
            </div>
          </div>
        )}
      </div>

      {/* 推薦輪播組件 */}
      <Testimonials {...props} testimonials={testimonials} />
    </div>
  );
};

const meta: Meta<typeof Testimonials> = {
  title: 'Components/Testimonials',
  component: Testimonials,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Testimonials 是一個客戶推薦輪播組件，展示來自不同客戶的推薦內容，支援自動播放和分頁導航。',
      },
    },
  },
  argTypes: {
    testimonials: {
      description: '推薦內容陣列',
      control: { type: 'object' },
      table: {
        type: { summary: 'TestimonialItem[]' },
        defaultValue: { summary: 'defaultTestimonials' },
      },
    },
    autoplay: {
      description: '是否自動播放',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    autoplayDelay: {
      description: '自動播放延遲時間（毫秒）',
      control: { type: 'range', min: 1000, max: 10000, step: 500 },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '3000' },
      },
    },
    speed: {
      description: '切換動畫速度（毫秒）',
      control: { type: 'range', min: 300, max: 2000, step: 100 },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '800' },
      },
    },
    mousewheel: {
      description: '是否啟用滑鼠滾輪控制',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    loop: {
      description: '是否循環播放',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    spaceBetween: {
      description: '不同斷點的間距設定',
      control: { type: 'object' },
      table: {
        type: { summary: 'SpaceBetweenConfig' },
        defaultValue: { summary: '{ mobile: 24, tablet: 40, desktop: 72, large: 128 }' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Testimonials>;

// 預設故事
export const Default: Story = {
  args: {
    testimonials: mockTestimonials,
    autoplay: true,
    autoplayDelay: 3000,
    speed: 800,
    mousewheel: true,
    loop: true,
    spaceBetween: {
      mobile: 24,
      tablet: 40,
      desktop: 72,
      large: 128,
    },
  },
  parameters: {
    docs: {
      description: {
        story: '預設的推薦輪播組件，包含完整的客戶推薦內容。',
      },
    },
  },
};

// 🎮 互動式推薦管理
export const Interactive: StoryObj<typeof InteractiveTestimonials> = {
  render: (args) => <InteractiveTestimonials {...args} />,
  args: {
    testimonials: mockTestimonials,
    autoplay: true,
    autoplayDelay: 4000,
    speed: 800,
    mousewheel: true,
    loop: true,
    spaceBetween: {
      mobile: 24,
      tablet: 40,
      desktop: 72,
      large: 128,
    },
  },
  parameters: {
    docs: {
      description: {
        story: '🎮 **互動式推薦管理** - 可以動態新增、刪除、編輯推薦項目的互動版本。透過上方的控制面板來管理推薦內容，變更會即時反映在下方的輪播組件中。',
      },
    },
  },
};

// 無自動播放
export const NoAutoplay: Story = {
  args: {
    ...Default.args,
    autoplay: false,
  },
  parameters: {
    docs: {
      description: {
        story: '關閉自動播放功能的推薦輪播組件，需要手動切換。',
      },
    },
  },
};

// 快速播放
export const FastAutoplay: Story = {
  args: {
    ...Default.args,
    autoplayDelay: 1500,
    speed: 400,
  },
  parameters: {
    docs: {
      description: {
        story: '快速自動播放的推薦輪播組件，適合快速展示。',
      },
    },
  },
};

// 慢速播放
export const SlowAutoplay: Story = {
  args: {
    ...Default.args,
    autoplayDelay: 6000,
    speed: 1200,
  },
  parameters: {
    docs: {
      description: {
        story: '慢速自動播放的推薦輪播組件，適合詳細閱讀。',
      },
    },
  },
};

// 簡短內容
export const ShortContent: Story = {
  args: {
    ...Default.args,
    testimonials: shortTestimonials,
  },
  parameters: {
    docs: {
      description: {
        story: '包含簡短推薦內容的輪播組件，測試不同文字長度的顯示效果。',
      },
    },
  },
};

// 無循環播放
export const NoLoop: Story = {
  args: {
    ...Default.args,
    loop: false,
  },
  parameters: {
    docs: {
      description: {
        story: '不循環播放的推薦輪播組件，播放到最後一張會停止。',
      },
    },
  },
};

// 無滑鼠滾輪控制
export const NoMousewheel: Story = {
  args: {
    ...Default.args,
    mousewheel: false,
  },
  parameters: {
    docs: {
      description: {
        story: '關閉滑鼠滾輪控制的推薦輪播組件，只能透過分頁按鈕控制。',
      },
    },
  },
};

// 自訂間距
export const CustomSpacing: Story = {
  args: {
    ...Default.args,
    spaceBetween: {
      mobile: 16,
      tablet: 32,
      desktop: 48,
      large: 64,
    },
  },
  parameters: {
    docs: {
      description: {
        story: '自訂間距設定的推薦輪播組件，展示不同斷點的間距效果。',
      },
    },
  },
};