import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class CookieDemo extends HttpServlet {
    public void doGet(HttpServletRequest req, HttpServletResponse res)
            throws ServletException, IOException {

        Cookie c = new Cookie("user", "Shivani");
        c.setMaxAge(3600);
        res.addCookie(c);

        res.getWriter().println("Cookie Created");
    }
}
