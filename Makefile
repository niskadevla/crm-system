create:
    docker build . -t niskadevla/crm-system
run:
    docker run -d -p 80:5000 -v files:/app/server/uploads --rm --name crm-system niskadevla/crm-system
stop:
    docker stop crm-system