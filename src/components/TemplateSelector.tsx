import type { TemplateType } from '../types/market';

interface TemplateSelectorProps {
  selectedTemplate: TemplateType;
  onTemplateChange: (template: TemplateType) => void;
}

export default function TemplateSelector({
  selectedTemplate,
  onTemplateChange,
}: TemplateSelectorProps) {
  const templates: { value: TemplateType; label: string }[] = [
    { value: 'bold', label: 'Bold' },
    // Other templates hidden for now
    // { value: 'minimal', label: 'Minimal' },
    // { value: 'gradient', label: 'Gradient' },
  ];

  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-gray-900">
        Template Style
      </label>
      <div className="grid grid-cols-1 gap-2">
        {templates.map((template) => (
          <button
            key={template.value}
            onClick={() => onTemplateChange(template.value)}
            className={`px-4 py-3 rounded-lg font-semibold text-sm transition-all border-2 ${
              selectedTemplate === template.value
                ? 'bg-sky-blue border-sky-blue text-white shadow-md'
                : 'bg-white border-gray-200 text-gray-700 hover:border-sky-blue'
            }`}
            type="button"
          >
            {template.label}
          </button>
        ))}
      </div>
    </div>
  );
}
