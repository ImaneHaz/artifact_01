// tests/tutors.test.js
// tests/tutors.test.js
test('Basic addition test', () => {
    expect(1 + 1).toBe(2);
});


const tutors = [
    { name: 'John Doe', ageRange: '10-15', subject: 'Mathematics' },
    { name: 'Jane Smith', ageRange: '15-17', subject: 'Physics' },
    { name: 'Emily Johnson', ageRange: '17+', subject: 'Chemistry' }
  ];
  
  function filterTutorsByAge(tutors, age) {
    if (age >= 10 && age <= 15) {
      return tutors.filter(tutor => tutor.ageRange === '10-15');
    } else if (age > 15 && age <= 17) {
      return tutors.filter(tutor => tutor.ageRange === '15-17');
    } else if (age > 17) {
      return tutors.filter(tutor => tutor.ageRange === '17+');
    } else {
      return [];
    }
  }
  
  test('filters tutors correctly for age 14', () => {
    const result = filterTutorsByAge(tutors, 14);
    expect(result).toEqual([{ name: 'John Doe', ageRange: '10-15', subject: 'Mathematics' }]);
  });
  
  test('filters tutors correctly for age 16', () => {
    const result = filterTutorsByAge(tutors, 16);
    expect(result).toEqual([{ name: 'Jane Smith', ageRange: '15-17', subject: 'Physics' }]);
  });
  
  test('filters tutors correctly for age 18', () => {
    const result = filterTutorsByAge(tutors, 18);
    expect(result).toEqual([{ name: 'Emily Johnson', ageRange: '17+', subject: 'Chemistry' }]);
  });
  
  test('returns an empty array for age below 10', () => {
    const result = filterTutorsByAge(tutors, 9);
    expect(result).toEqual([]);
  });
  