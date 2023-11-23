import styles from "./Exercises.module.css";

const Exercises = () => {
  return (
    <div className={styles.exercises}>
      <div className={styles.healthCoachWrapper}>
        <div className={styles.healthCoach}>{`HEALTH COACH  `}</div>
      </div>
      <div className={styles.frame}>
        <div className={styles.exercises1}>{`EXERCISES `}</div>
      </div>
      <a
        className={styles.beginnerBodyweightWorkout}
        href="https://www.nerdfitness.com/blog/beginner-body-weight-workout-burn-fat-build-muscle/"
        target="_blank"
      >
        Beginner Bodyweight Workout
      </a>
      <div className={styles.bodyweightSquats20Container}>
        <ul className={styles.bodyweightSquats20RepsPus}>
          <li className={styles.bodyweightSquats20Reps}>
            <a
              className={styles.bodyweightSquats}
              href="https://www.nerdfitness.com/blog/strength-training-101-how-to-squat-properly/"
              target="_blank"
            >
              <span className={styles.bodyweightSquats1}>
                Bodyweight squats
              </span>
            </a>
            : 20 reps
          </li>
          <li className={styles.bodyweightSquats20Reps}>
            <a
              className={styles.pushUps}
              href="https://www.nerdfitness.com/blog/proper-push-up/"
              target="_blank"
            >
              <span className={styles.bodyweightSquats1}>Push-ups</span>
            </a>
            : 10 reps
          </li>
          <li className={styles.bodyweightSquats20Reps}>
            <a
              className={styles.pushUps}
              href="https://www.youtube.com/watch?v=9vJImczBAu8"
              target="_blank"
            >
              <span className={styles.bodyweightSquats1}>Walking lunges:</span>
            </a>{" "}
            10 each leg
          </li>
          <li className={styles.bodyweightSquats20Reps}>
            <a
              className={styles.pushUps}
              href="https://www.youtube.com/watch?v=ej9XLPN3mPo"
              target="_blank"
            >
              <span className={styles.bodyweightSquats1}>Dumbbell rows</span>
            </a>{" "}
            (using a gallon milk jug or another weight): 10 each arm.
          </li>
          <li className={styles.bodyweightSquats20Reps}>
            <a
              className={styles.pushUps}
              href="https://www.youtube.com/watch?v=wy7QOQEZ8Rg"
              target="_blank"
            >
              <span className={styles.bodyweightSquats1}>Plank</span>
            </a>
            : 15 seconds
          </li>
          <li>
            <a
              className={styles.pushUps}
              href="https://youtu.be/qQ96oXp5RTU?t=64"
              target="_blank"
            >
              <span className={styles.bodyweightSquats1}>Jumping Jacks</span>
            </a>
            : 30 reps
          </li>
        </ul>
      </div>
      <img className={styles.image13Icon} alt="" src="/image-13@2x.png" />
      <div className={styles.theAdvancedBodyweightContainer}>
        <p className={styles.theAdvancedBodyweightWorkou}>
          <span className={styles.theAdvancedBodyweight}>
            THE ADVANCED BODYWEIGHT WORKOUT:
          </span>
        </p>
        <ul className={styles.bodyweightSquats20RepsPus}>
          <li className={styles.bodyweightSquats20Reps}>
            <span>
              One-legged squats – 10 each side [warning: super-difficult, only
              attempt if you’re in good enough shape]
            </span>
          </li>
          <li className={styles.bodyweightSquats20Reps}>
            <span>Bodyweight squats: 20 reps</span>
          </li>
          <li className={styles.bodyweightSquats20Reps}>
            <span>Walking lunges: 20 reps (10 each leg)</span>
          </li>
          <li className={styles.bodyweightSquats20Reps}>
            <span>
              {`Jump step-ups: 20 reps (10 each leg)                     `}
            </span>
          </li>
          <li className={styles.bodyweightSquats20Reps}>
            <span>{`Pull-ups: 10 reps [or `}</span>
            <a
              className={styles.pushUps}
              href="https://www.youtube.com/watch?v=OYUxXMGVuuU"
              target="_blank"
            >
              <span>
                <span className={styles.bodyweightSquats1}>
                  inverted bodyweight rows
                </span>
              </span>
            </a>
            <span>]</span>
          </li>
          <li className={styles.bodyweightSquats20Reps}>
            <span>Dips (between bar stools): 10 reps</span>
          </li>
          <li className={styles.bodyweightSquats20Reps}>
            <span>
              Chin-ups: 10 reps [or inverted bodyweight rows with underhand
              grip]
            </span>
          </li>
          <li className={styles.bodyweightSquats20Reps}>
            <span>Push-ups: 10 reps</span>
          </li>
          <li>
            <span>Plank: 30 seconds</span>
          </li>
        </ul>
      </div>
      <img className={styles.image14Icon} alt="" src="/image-14@2x.png" />
      <img className={styles.image15Icon} alt="" src="/image-15@2x.png" />
      <img className={styles.image16Icon} alt="" src="/image-16@2x.png" />
      <img className={styles.image17Icon} alt="" src="/image-17@2x.png" />
      <div className={styles.jumpStepUps}>Jump Step-ups</div>
      <div className={styles.dipsBetweenBar}>Dips (Between bar stools)</div>
      <div className={styles.pullUps}>Pull-ups</div>
    </div>
  );
};

export default Exercises;
