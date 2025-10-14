import { useState } from 'react';
import './App.css';

function App() {
  const [hourlyWage, setHourlyWage] = useState('');
  const [workDays, setWorkDays] = useState({
    월: { checked: false, hours: '' },
    화: { checked: false, hours: '' },
    수: { checked: false, hours: '' },
    목: { checked: false, hours: '' },
    금: { checked: false, hours: '' },
    토: { checked: false, hours: '' },
    일: { checked: false, hours: '' },
  });
  const [includeInsurance, setIncludeInsurance] = useState(false);

  const days = ['월', '화', '수', '목', '금', '토', '일'];

  const handleDayToggle = (day) => {
    setWorkDays((prev) => ({
      ...prev,
      [day]: { ...prev[day], checked: !prev[day].checked },
    }));
  };

  const handleHoursChange = (day, hours) => {
    setWorkDays((prev) => ({
      ...prev,
      [day]: { ...prev[day], hours },
    }));
  };

  const calculateSalary = () => {
    const wage = parseFloat(hourlyWage) || 0;
    let totalHours = 0;
    let workingDaysCount = 0;

    // 총 근무 시간 계산
    Object.entries(workDays).forEach(([day, data]) => {
      if (data.checked && data.hours) {
        totalHours += parseFloat(data.hours) || 0;
        workingDaysCount++;
      }
    });

    // 기본 급여
    let basicSalary = totalHours * wage;

    // 주휴수당 계산 (주 15시간 이상 근무 시)
    let holidayPay = 0;
    if (totalHours >= 15 && workingDaysCount > 0) {
      const avgDailyHours = totalHours / workingDaysCount;
      holidayPay = avgDailyHours * wage;
    }

    // 총 급여 (세전)
    const totalBeforeTax = basicSalary + holidayPay;

    // 4대보험료 계산
    let insurance = 0;
    if (includeInsurance) {
      const nationalPension = totalBeforeTax * 0.045; // 국민연금 4.5%
      const healthInsurance = totalBeforeTax * 0.03545; // 건강보험 3.545%
      const longTermCare = healthInsurance * 0.1295; // 장기요양보험 12.95%
      const employmentInsurance = totalBeforeTax * 0.009; // 고용보험 0.9%
      insurance = nationalPension + healthInsurance + longTermCare + employmentInsurance;
    }

    // 실수령액
    const netSalary = totalBeforeTax - insurance;

    return {
      basicSalary,
      holidayPay,
      totalBeforeTax,
      insurance,
      netSalary,
      totalHours,
    };
  };

  const result = calculateSalary();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-4xl font-bold text-center text-indigo-600 mb-2">
            💼 알바 시급 계산기
          </h1>
          <p className="text-center text-gray-600 mb-8">
            아르바이트 실수령액을 정확하게 계산해보세요
          </p>

          {/* 시급 입력 */}
          <div className="mb-8">
            <label className="block text-lg font-semibold text-gray-700 mb-3">시급 입력</label>
            <input
              type="number"
              value={hourlyWage}
              onChange={(e) => setHourlyWage(e.target.value)}
              placeholder="시급을 입력하세요 (예: 9860)"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 text-lg"
            />
            <p className="mt-2 text-sm text-gray-500">💡 2024년 최저시급: 9,860원</p>
          </div>

          {/* 요일 선택 */}
          <div className="mb-8">
            <label className="block text-lg font-semibold text-gray-700 mb-3">
              근무 요일 및 시간
            </label>
            <div className="space-y-3">
              {days.map((day) => (
                <div key={day} className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg">
                  <label className="flex items-center gap-3 cursor-pointer min-w-[60px]">
                    <input
                      type="checkbox"
                      checked={workDays[day].checked}
                      onChange={() => handleDayToggle(day)}
                      className="w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500"
                    />
                    <span className="font-medium text-gray-700">{day}요일</span>
                  </label>
                  <input
                    type="number"
                    value={workDays[day].hours}
                    onChange={(e) => handleHoursChange(day, e.target.value)}
                    disabled={!workDays[day].checked}
                    placeholder="근무 시간"
                    className={`flex-1 px-4 py-2 border-2 rounded-lg focus:outline-none focus:border-indigo-500 ${
                      workDays[day].checked
                        ? 'bg-white border-gray-300'
                        : 'bg-gray-200 border-gray-200 cursor-not-allowed'
                    }`}
                  />
                  <span className="text-gray-600 min-w-[30px]">시간</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4대보험 체크박스 */}
          <div className="mb-8">
            <label className="flex items-center gap-3 cursor-pointer bg-yellow-50 p-4 rounded-lg border-2 border-yellow-200">
              <input
                type="checkbox"
                checked={includeInsurance}
                onChange={(e) => setIncludeInsurance(e.target.checked)}
                className="w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500"
              />
              <div>
                <span className="font-semibold text-gray-700">4대보험 가입</span>
                <p className="text-sm text-gray-600">
                  (국민연금 4.5%, 건강보험 3.545%, 장기요양 0.459%, 고용보험 0.9%)
                </p>
              </div>
            </label>
          </div>

          {/* 결과 표시 */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 text-white">
            <h2 className="text-2xl font-bold mb-4">📊 급여 계산 결과</h2>

            <div className="space-y-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex justify-between items-center">
                <span className="text-indigo-100">총 근무 시간:</span>
                <span className="text-xl font-semibold">{result.totalHours.toFixed(1)}시간</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-indigo-100">기본 급여:</span>
                <span className="text-xl font-semibold">
                  {result.basicSalary.toLocaleString()}원
                </span>
              </div>

              {result.holidayPay > 0 && (
                <div className="flex justify-between items-center">
                  <span className="text-indigo-100">주휴수당:</span>
                  <span className="text-xl font-semibold text-green-300">
                    +{result.holidayPay.toLocaleString()}원
                  </span>
                </div>
              )}

              <div className="flex justify-between items-center border-t border-white/20 pt-3">
                <span className="text-indigo-100">세전 총액:</span>
                <span className="text-xl font-semibold">
                  {result.totalBeforeTax.toLocaleString()}원
                </span>
              </div>

              {includeInsurance && (
                <div className="flex justify-between items-center">
                  <span className="text-indigo-100">4대보험료:</span>
                  <span className="text-xl font-semibold text-red-300">
                    -{result.insurance.toLocaleString()}원
                  </span>
                </div>
              )}

              <div className="flex justify-between items-center border-t-2 border-white/30 pt-4 mt-4">
                <span className="text-xl font-bold">💰 실수령액:</span>
                <span className="text-3xl font-bold text-yellow-300">
                  {result.netSalary.toLocaleString()}원
                </span>
              </div>
            </div>

            {result.totalHours < 15 && result.totalHours > 0 && (
              <div className="mt-4 bg-yellow-500/20 border border-yellow-300/50 rounded-lg p-3">
                <p className="text-sm text-yellow-100">
                  ⚠️ 주 15시간 미만 근무 시 주휴수당이 지급되지 않습니다.
                </p>
              </div>
            )}
          </div>
        </div>

        <footer className="mt-8 text-center text-gray-600 text-sm">
          <p>💡 이 계산기는 참고용이며, 실제 급여는 사업장 상황에 따라 다를 수 있습니다.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
