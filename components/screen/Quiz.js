import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import questions from '../data/questions.json';

const QuizScreen = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
  
    const handleAnswerPress = (isCorrect) => {
      if (isCorrect) {
        setScore(score + 1);
      }
  
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowResult(true);
      }
    };
  
    const resetQuiz = () => {
      setCurrentQuestion(0);
      setScore(0);
      setShowResult(false);
    };
  
    if (showResult) {
      return (
        <ImageBackground
          source={require('../img/cake.jpg')}
          style={styles.background}
          imageStyle={{ opacity: 1 }}  // Háttér áttetszősége
        >
          <View style={styles.container}>
            <Text style={styles.resultText}>A csíny letudva!</Text>
            <Text style={styles.resultText}>Pontszámod: {score} / {questions.length}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={resetQuiz} style={styles.answerButton}>
                <Text style={styles.answerText}>Újrakezdés</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      );
    }
  
    return (
      <ImageBackground
        source={require('../img/Welcomes.jpg')}
        style={styles.background}
        imageStyle={{ opacity: 1 }}  
      >
        <View style={styles.container}>
          {questions[currentQuestion] && (
            <>
              <Text style={styles.questionText}>
                {questions[currentQuestion].question || "Nincs kérdés"}
              </Text>
              <View style={styles.answerContainer}>
                {questions[currentQuestion].answers.map((answer, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.answerButton}
                    onPress={() => handleAnswerPress(answer.isCorrect)}
                  >
                    <Text style={styles.answerText}>{answer.text}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </>
          )}
        </View>
      </ImageBackground>
    );
  };
  
  const styles = StyleSheet.create({
    background: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
    },
    questionText: {
      fontSize: 26,
      color: '#FFFFFF',
      marginBottom: 20,
      textAlign: 'center',
      paddingHorizontal: 20,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',  
      borderRadius: 10,
      flexWrap: 'wrap',
    },
    answerContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    answerButton: {
      backgroundColor: '#5f5f5f',
      padding: 15,
      margin: 10,
      borderRadius: 10,
      borderColor: '#FFD700',
      borderWidth: 2,
      width: '40%', 
      alignItems: 'center',
    },
    answerText: {
      color: '#FFFFFF',
      fontSize: 18,
      textAlign: 'center',
    },
    resultText: {
        fontSize: 26,
        color: '#FFFFFF',
        marginBottom: 20,
        textAlign: 'center',
        paddingHorizontal: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',  
        borderRadius: 10,
        flexWrap: 'wrap',
        
    },
    buttonContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  
  export default QuizScreen;