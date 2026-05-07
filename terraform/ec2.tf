resource "aws_instance" "ubuntu" {
  ami           = "ami-0eb38b817b93460ac"
  ebs_optimized = true
  instance_type = "t3.micro"
  
  tags = {
    Name = "Hello World!"
  }
}

