import java.security.DrbgParameters.Reseed;
import java.util.*;

class Solution {
    public String alienOrder(String[] words) {
        Map<Character, Set<Character>> graph = new HashMap<>();
        int[] inDegree = new int[26];
        buildGraph(graph, inDegree, words);
        return bfs(graph, inDegree);
    }

    private void buildGraph(Map<Character, Set<Character>> g, int[] inDegree, String[] words) {
        for (String s : words) {
            for (char c : s.toCharArray()) {
                g.putIfAbsent(c, new HashSet<>());
            }
        }

        for (int i = 1; i < words.length; i++) {
            String first = words[i - 1];
            String second = words[i];
            int len = Math.min(first.length(), second.length());

            for (int j = 0; j < len; j++) {
                if (first.charAt(j) != second.charAt(j)) {

                    char out = first.charAt(j);
                    char in = second.charAt(j);

                    if (!g.get(out).contains(in)) {
                        g.get(out).add(in);
                        inDegree[in - 'a']++;
                    }
                    break;
                }

            }
        }
    }

    private String bfs(Map<Character, Set<Character>> g, int[] inDegree) {
        StringBuilder sb = new StringBuilder();
        int totalChars = g.size();
        Queue<Character> q = new LinkedList<>();
        for (char c : g.keySet()) {
            if (inDegree[c - 'a'] == 0) {
                sb.append(c);
                q.offer(c);
            }
        }

        while (!q.isEmpty()) {
            char cur = q.poll();
            if (g.get(cur) == null || g.get(cur).size() == 0)
                continue;

            for (char neigh : g.get(cur)) {
                inDegree[neigh - 'a']--;
                if (inDegree[neigh - 'a'] == 0) {
                    q.offer(neigh);
                    sb.append(neigh);
                }
            }
        }

        return sb.length() == totalChars ? sb.toString() : "";
    }
}

class Main {
    public static void main(String[] args) {
        System.out.println("Hello world!");
        Solution solution = new Solution();
        String[] words = new String[] { "zy", "zx" };

        System.out.println(solution.alienOrder(words));
    }
}