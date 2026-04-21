import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class SessionDemo extends HttpServlet {
    public void doGet(HttpServletRequest req, HttpServletResponse res)
            throws ServletException, IOException {

        HttpSession session = req.getSession();
        session.setAttribute("user", "Shivani");

        res.getWriter().println("Session Created");
    }
}
