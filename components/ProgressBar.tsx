interface ProgressBarProps {
  currentStep: number // 1 a 5
  totalSteps?: number
}

const steps = [
  { number: 1, label: 'Dados', icon: '👤' },
  { number: 2, label: 'Graus', icon: '🎓' },
  { number: 3, label: 'Docs', icon: '📄' },
  { number: 4, label: 'Revisão', icon: '✓' },
  { number: 5, label: 'Pagamento', icon: '💳' }
]

export default function ProgressBar({ currentStep, totalSteps = 5 }: ProgressBarProps) {
  return (
    <div className="mb-8">
      {/* Mobile: Apenas etapa atual */}
      <div className="md:hidden text-center">
        <div className="inline-flex items-center gap-3 bg-[#ECE0F0] px-6 py-3 rounded-full">
          <div className="w-12 h-12 rounded-full bg-[#5A5AA4] text-white flex items-center justify-center text-xl animate-pulse shadow-lg">
            {steps[currentStep - 1].icon}
          </div>
          <div className="text-left">
            <div className="text-sm font-medium text-[#5A5AA4]">
              {steps[currentStep - 1].label}
            </div>
            <div className="text-xs text-[#26377F]">
              Etapa {currentStep} de {totalSteps}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: Todas as etapas */}
      <div className="hidden md:flex items-center justify-center gap-2">
        {steps.map((step, index) => {
          const isCompleted = step.number < currentStep
          const isCurrent = step.number === currentStep
          const isFuture = step.number > currentStep

          return (
            <div key={step.number} className="flex items-center">
              {/* Etapa */}
              <div className="flex flex-col items-center gap-2">
                <div
                  className={`
                    rounded-full flex items-center justify-center text-white font-bold transition-all
                    ${isCurrent ? 'w-14 h-14 bg-[#5A5AA4] animate-pulse shadow-[0_4px_12px_rgba(90,90,164,0.4)]' : ''}
                    ${isCompleted ? 'w-12 h-12 bg-[#4CAF50] shadow-[0_2px_8px_rgba(76,175,80,0.3)]' : ''}
                    ${isFuture ? 'w-11 h-11 bg-transparent border-2 border-[#C6C0E1] opacity-60' : ''}
                  `}
                >
                  {isCompleted ? (
                    <span className="text-2xl">✓</span>
                  ) : (
                    <span className={`text-2xl ${isFuture ? 'opacity-50' : ''}`}>
                      {step.icon}
                    </span>
                  )}
                </div>
                
                <span
                  className={`
                    text-sm font-medium transition-colors
                    ${isCurrent ? 'text-[#5A5AA4] font-bold' : ''}
                    ${isCompleted ? 'text-[#4CAF50]' : ''}
                    ${isFuture ? 'text-[#C6C0E1]' : ''}
                  `}
                >
                  {step.label}
                </span>
              </div>

              {/* Linha conectora */}
              {index < steps.length - 1 && (
                <div className="w-16 h-1 mx-2 rounded-full overflow-hidden">
                  <div
                    className={`
                      h-full transition-all
                      ${step.number < currentStep ? 'bg-[#4CAF50]' : ''}
                      ${step.number === currentStep ? 'bg-gradient-to-r from-[#5A5AA4] to-[#ECE0F0]' : ''}
                      ${step.number > currentStep ? 'bg-[#ECE0F0]' : ''}
                    `}
                  />
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Linha de progresso fina */}
      <div className="mt-4 w-full max-w-2xl mx-auto h-1 bg-[#ECE0F0] rounded-full overflow-hidden">
        <div 
          className="h-full bg-[#5A5AA4] transition-all duration-300 ease-out"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        />
      </div>
    </div>
  )
}