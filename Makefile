create:
    docker build . -t niskadevla/crm-system
run:
    docker run -d -p 443:5000 -v files:/app/server/uploads --rm --name crm-system niskadevla/crm-system
stop:
    docker stop crm-system
push:
    docker push niskadevla/crm-system