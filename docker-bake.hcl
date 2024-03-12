group "default" {
  targets = ["backend-server", "room-server", "web-server", "init-db", "openresty"]
}

variable "IMAGE_REGISTRY" {
  default = "docker.io"
}

variable "SEMVER_FULL" {
  default = "v0.0.0-alpha"
}

variable "IMAGE_TAG" {
  default = "latest"
}

target "backend-server" {
  context = "."
  dockerfile = "packaging/Dockerfile.backend-server"
  args = {
    SEMVER_FULL = SEMVER_FULL
  }
  platforms = ["linux/amd64", "linux/arm64"]
  tags = ["${IMAGE_REGISTRY}/maxsl2688/backend-server:latest", "${IMAGE_REGISTRY}/maxsl2688/backend-server:${IMAGE_TAG}"]
}

target "room-server" {
  context = "."
  dockerfile = "packaging/Dockerfile.room-server"
  args = {
    SEMVER_FULL = SEMVER_FULL
  }
  platforms = ["linux/amd64", "linux/arm64"]
  tags = ["${IMAGE_REGISTRY}/maxsl2688/room-server:latest", "${IMAGE_REGISTRY}/maxsl2688/room-server:${IMAGE_TAG}"]
}

target "web-server" {
  context = "."
  dockerfile = "packaging/Dockerfile.web-server"
  args = {
    SEMVER_FULL = SEMVER_FULL
  }
  platforms = ["linux/amd64", "linux/arm64"]
  tags = ["${IMAGE_REGISTRY}/maxsl2688/web-server:latest", "${IMAGE_REGISTRY}/maxsl2688/web-server:${IMAGE_TAG}"]
}

# https://github.com/apitable/apitable/issues/1379
target "web-server-experimental" {
  context = "."
  dockerfile = "packaging/Dockerfile.web-server"
  args = {
    SEMVER_FULL = SEMVER_FULL
  }
  platforms = ["linux/amd64", "linux/arm64"]
  tags = ["${IMAGE_REGISTRY}/maxsl2688/web-server:latest", "${IMAGE_REGISTRY}/maxsl2688/web-server:${IMAGE_TAG}"]
}

target "init-db" {
  context = "./init-db"
  dockerfile = "Dockerfile"
  args = {
    SEMVER_FULL = SEMVER_FULL
  }
  platforms = ["linux/amd64", "linux/arm64"]
  tags = ["${IMAGE_REGISTRY}/maxsl2688/init-db:latest", "${IMAGE_REGISTRY}/maxsl2688/init-db:${IMAGE_TAG}"]
}

target "openresty" {
  context = "./gateway"
  dockerfile = "../packaging/Dockerfile.openresty"
  args = {
    SEMVER_FULL = SEMVER_FULL
  }
  platforms = ["linux/amd64", "linux/arm64"]
  tags = ["${IMAGE_REGISTRY}/maxsl2688/openresty:latest", "${IMAGE_REGISTRY}/maxsl2688/openresty:${IMAGE_TAG}"]
}

target "all-in-one" {
  context = "./packaging/all-in-one/all-in-one"
  dockerfile = "Dockerfile"
  args = {
    SEMVER_FULL = SEMVER_FULL
    IMAGE_TAG = IMAGE_TAG
  }
  platforms = ["linux/amd64"]
  tags = ["${IMAGE_REGISTRY}/maxsl2688/all-in-one:latest", "${IMAGE_REGISTRY}/maxsl2688/all-in-one:${IMAGE_TAG}"]
}