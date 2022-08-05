package exercices;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class P001 implements EulerExercice {

    public static void main(String[] args) {
        System.out.println(new P001().run());
    }

    @Override
    public String run() {
        Logger logger = LoggerFactory.getLogger(P001.class);
        long start = System.nanoTime();
        String solution = solution();
        long elapsedTime = (System.nanoTime()-start)/1000;
        logger.info("Execution time (ms): " + elapsedTime);
        return solution;
    }

    private String solution() {
        int solution = 0;
        for (int i = 3; i < 1000; i += 3) {
            solution += i;
        }
        for (int i = 5; i < 1000; i += 5) {
            if (solution % 3 != 0) {
                solution += i;
            }
        }
        return Integer.toString(solution);
    }
}
