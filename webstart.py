from http.server import HTTPServer, BaseHTTPRequestHandler
print('Web started');
class Serv(BaseHTTPRequestHandler):

    def do_GET(self):
        if self.path == '/':
            self.path = 'index.html'
        try:
            file_to_open = open(self.path[1:]).read()
            self.send_response(200)
        except:
            file_to_open = "<title>Error 404</title><h1>404 Not found</h1><hr><p>Okurka web start buld 1A2022 - projekt1.g6.cz/webstart</p>"
            self.send_response(404)
        self.end_headers()
        self.wfile.write(bytes(file_to_open, 'utf-8'))


httpd = HTTPServer(('localhost',8080), Serv)
httpd.serve_forever()
