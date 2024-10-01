import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import questions from '../data/questions.json' 

const QuizScreen = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [isQuizFinished, setIsQuizFinished] = useState(false);
  
    const handleAnswer = (isCorrect) => {
      if (isCorrect) setScore(score + 1);
      
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setIsQuizFinished(true);
      }
    };
  
    if (isQuizFinished) {
      return (
        <View style={styles.container}>
          <Text style={styles.score}>A pontszámod: {score}/{questions.length}</Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              setCurrentQuestion(0);
              setScore(0);
              setIsQuizFinished(false);
            }}
          >
            <Text style={styles.btnText}>Újrakezdés</Text>
          </TouchableOpacity>
        </View>
      );
    }
  
    return (
      <View style={styles.container}>
      <Text style={styles.question}>{questions[currentQuestion].question}</Text>
      {questions[currentQuestion].answers.map((answer, index) => (
        <TouchableOpacity
          style={styles.btn}
          key={index}
          onPress={() => handleAnswer(answer.isCorrect)}
        >
          <Text style={styles.btnText}>{answer.text ? String(answer.text) : 'Nincs válasz'}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
  };
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
   
  },
  questionText: {
    fontSize: 24,
    color: '#FFD700', // Griffendél arany színe
    marginBottom: 20,
    textAlign: 'center'
  },
  answerButton: {
    backgroundColor: '#444',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10
  },
  answerText: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center'
  },
  resultText: {
    fontSize: 28,
    color: '#FFD700',
    textAlign: 'center',
    marginBottom: 20
  },
  button: {
    backgroundColor: '#FF4500',
    padding: 15,
    marginTop: 20,
    borderRadius: 10
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center'
  }
});

export default QuizScreen;
